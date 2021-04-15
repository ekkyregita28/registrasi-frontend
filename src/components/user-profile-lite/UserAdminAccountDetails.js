import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import { GETUSER, GETPOSITION, GETDAERAHBYID } from '../../utils/url'
import axios from 'axios';

const UserAdminAccountDetails = ({ title }) => {
  const [recent_user,setUser]=useState("");
  const [position,setPosition]=useState("");
  const [daerah,setDaerah]=useState("");
  useEffect(()=>{
      axios
      .get(GETUSER + "/" + localStorage.getItem("user"))
      .then((res) => {
        const result = res.data.data;
        setUser(result);
        axios
          .get(GETPOSITION + "/" + res.data.data.position_id)
          .then((res) => {
            const hasil = res.data.data.nama_posisi;
            setPosition(hasil);
        });
        axios
          .get(GETDAERAHBYID + "/" + res.data.data.daerah_id)
          .then((res) => {
            const hasil = res.data.data.nama_daerah;
            setDaerah(hasil);
        });
    });
  },[]);
  return(
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* ID Admin */}
                <Col md="6" className="form-group">
                <label htmlFor="feIdAdmin">ID Admin</label>
                  <FormInput readonly
                    id="feIdAdmin"
                    value={recent_user.id}
                  />
                </Col>
                </Row>
                <Row form>
                {/* Position */}
                <Col md="6" className="form-group">
                <label htmlFor="fePosition">Email</label>
                  <FormInput
                    id="fePosition" readonly
                    value={recent_user.email}
                  />
                </Col>
                </Row>
                <Row form>
                {/* Daerah */}
                <Col md="6" className="form-group">
                <label htmlFor="feDaerah">Region</label>
                  <FormInput
                    id="feDaerah" readonly
                    value={daerah}
                  />
                </Col>
                </Row>
                <Row form>
                {/* Adress */}
                <Col md="6" className="form-group">
                <label htmlFor="feIdAddress">Alamat</label>
                  <FormInput
                    id="feIdAddress" readonly
                    value={recent_user.alamat}
                  />
                </Col>
                </Row>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
  );
}
UserAdminAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAdminAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAdminAccountDetails;
