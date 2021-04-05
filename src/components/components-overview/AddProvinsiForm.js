import React, { useEffect, useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button
} from "shards-react";
import { useHistory } from "react-router-dom"
import { CREATEPROVINSI } from '../../utils/url'
import axios from 'axios';

const AddProvinsiForm = () => {
  const [nama_provinsi,setNamaProvinsi]=useState("");

  const onSubmit = () => {
    axios
        .post(CREATEPROVINSI, {
            nama_provinsi: nama_provinsi
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
                <label htmlFor="namaHakAkses">Nama Provinsi</label>
                <FormInput id="namaHakAkses" placeholder="Jawa Timur" 
                onChange={(e)=>setNamaProvinsi(e.target.value)}
                value = {nama_provinsi}/>
              </FormGroup>
              <Button onClick={onSubmit} className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-3 mt-3 mt-sm-0">Create Provinsi</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  );
  
}

export default AddProvinsiForm;
