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
import { CREATEPOSITION } from '../../utils/url'
import axios from 'axios';

const AddPositionForm = () => {
  const [nama_posisi,setNamaPosition]=useState("");

  const onSubmit = () => {
    axios
        .post(CREATEPOSITION, {
            nama_posisi: nama_posisi
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
                <label htmlFor="namaPosisi">Nama Posisi</label>
                <FormInput id="namaPosisi" placeholder="Nama Posisi" 
                onChange={(e)=>setNamaPosition(e.target.value)}
                value = {nama_posisi}/>
              </FormGroup>
              <Button onClick={onSubmit} className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-3 mt-3 mt-sm-0">Create Position</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  );
  
}

export default AddPositionForm;
