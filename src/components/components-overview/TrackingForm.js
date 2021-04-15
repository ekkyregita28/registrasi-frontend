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
} from "shards-react";
import { useHistory } from "react-router-dom"
const TrackingForm = () => {
  const [ktp,setKtp]=useState("");
  const history = useHistory();

  const onSubmit = () => {
    localStorage.setItem("member", ktp);
    history.push("/list-history")
  }
  return(
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <label htmlFor="namaHakAkses">NIK</label>
                <FormInput id="namaHakAkses" placeholder="Masukkan NIK" 
                onChange={(e)=>setKtp(e.target.value)} 
                value = {ktp}/>
              </FormGroup>
              <Button onClick={onSubmit} className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-auto mt-3 mt-sm-4">Track your data</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  );
  
}

export default TrackingForm;
