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
import { LOGIN } from '../../utils/url'
import { login } from '../../utils/auth'
import axios from 'axios';

const LoginForm = () =>{
  const [nama,setNama]=useState("");
  const [password,setPassword]=useState("");
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
            login(res.data.data.id);
            history.push("/daerah")
        }).catch((err) => {
            alert("Username or Password Wrong" + " (" + err.message + ")");
            console.log(err);
        });
  }
  return(
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <label htmlFor="namaAdmin">Nama Admin</label>
                <FormInput id="namaAdmin" placeholder="Nama Admin" 
                onChange={(e)=>setNama(e.target.value)} 
                value = {nama} />
              </FormGroup>
              <FormGroup>
                <label htmlFor="password">Password</label>
                <FormInput type="password" id="password" placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                value = {password}/>
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