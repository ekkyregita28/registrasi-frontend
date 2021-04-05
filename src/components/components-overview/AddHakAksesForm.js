import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  Button
} from "shards-react";

const AddHakAksesForm = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <label htmlFor="namaHakAkses">Nama Hak Akses</label>
              <FormInput id="namaHakAkses" placeholder="Update Member" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="feInputAddress2">Role Hak Akses :</label>
              <FormCheckbox>Superadmin</FormCheckbox>
              <FormCheckbox>Admin Nasional</FormCheckbox>
              <FormCheckbox>Admin Provinsi</FormCheckbox>
              <FormCheckbox>Admin Daerah</FormCheckbox>
            </FormGroup>
            <Button type="submit" className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-3 mt-3 mt-sm-0">Create Hak Akses</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

export default AddHakAksesForm;
