import React from "react";
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

const TrackingForm = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <label htmlFor="namaHakAkses">NIK</label>
              <FormInput id="namaHakAkses" placeholder="Masukkan NIK" />
            </FormGroup>
            <Button type="submit" className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-auto mt-3 mt-sm-4">Track your data</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

export default TrackingForm;
