import React, { useEffect, useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  Button
} from "shards-react";
import { GETALLPROVINSIWOPAG } from '../../utils/url'
import { CREATEDAERAH } from '../../utils/url'
import axios from 'axios';

const AddDaerahForm = () => {
  const [data,setData] = useState([]);
  const [nama_daerah,setNamaDaerah]=useState("");
  const [provinsi_id,setProvinsiId]=useState("");
  
  useEffect(()=>{
    axios
      .get(GETALLPROVINSIWOPAG)
      .then((res) => {
        const result = res.data.data;
        setData(result);
    });
  },[])
  
  const onSubmit = () => {
    axios
        .post(CREATEDAERAH, {
            nama_daerah: nama_daerah,
            provinsi_id: provinsi_id
        })
        .then((res) => {
          window.location.reload(true);
        }).catch((err) => {
            alert("Tidak Berhasil" + " (" + err.message + ")");
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
              <label htmlFor="namaHakAkses">Nama Daerah</label>
              <FormInput id="namaHakAkses" placeholder="Surabaya"
              onChange={(e)=>setNamaDaerah(e.target.value)}
              value = {nama_daerah} />
            </FormGroup>
            <FormGroup>
                <FormSelect onChange={(e)=>setProvinsiId(e.target.value)}>
                <label htmlFor="namaHakAkses">Nama Provinsi</label>
                {
                  data.map((item)=>
                      <option value={item.id}>{item.nama_provinsi}</option>
                    )
                }
                </FormSelect>
            </FormGroup>
            <Button onClick={onSubmit} className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-3 mt-3 mt-sm-0">Create Daerah</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
  );
}

export default AddDaerahForm;
