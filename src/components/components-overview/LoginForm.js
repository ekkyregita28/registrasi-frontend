import React, { useEffect, useState } from "react"
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button
} from "shards-react"

import { useHistory } from "react-router-dom"
import { LOGIN, GETUSER } from '../../utils/url'
import { login } from '../../utils/auth'
import axios from 'axios';

const LoginForm = () => {
  const [nama, setNama] = useState("");
  const [recent_user,setUser]=useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onSubmit = () => {
    axios
      .post(LOGIN, {
        nama: nama,
        password: password
      })
      .then((res) => {
        setNama(res.nama);
        setPassword(res.password);
        const hasil = res.data.id
        localStorage.setItem("user", hasil);
        axios
          .get(GETUSER + "/" + localStorage.getItem("user"))
          .then((res) => {
            const result = res.data.data;
            setUser(result);
            if (result.position_id == 4)
              history.push("/allAdmin")
            else
              history.push("/home")
          })
      }).catch((err) => {
        alert("Username atau Password Salah" + " (" + err.message + ")");
        console.log(err);
      });
  }
  return (
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <label htmlFor="namaAdmin">Nama Admin</label>
                <FormInput id="namaAdmin" placeholder="Nama Admin"
                  onChange={(e) => setNama(e.target.value)}
                  value={nama} />
              </FormGroup>
              <FormGroup>
                <label htmlFor="password">Password</label>
                <FormInput type="password" id="password" placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password} />
              </FormGroup>
              <Button onClick={onSubmit} className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-auto mt-3 mt-sm-4">Login as Admin</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  )

}

export default LoginForm