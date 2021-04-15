import React from "react";
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

const UserMemberAccountDetails = ({ title }) => (
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
                {/* ID Anggota */}
                <Col md="6" className="form-group">
                <label htmlFor="feIdAnggota">ID Anggota</label>
                  <FormInput
                    id="feIdAnggota"
                    value="55764328"
                  />
                </Col>
                </Row>
                <Row form>
                {/* NIK */}
                <Col md="6" className="form-group">
                <label htmlFor="fePNIK">NIK</label>
                  <FormInput
                    id="feNIK"
                    value="3514073802000991"
                  />
                </Col>
                </Row>
                <Row form>
                {/* Alamat */}
                <Col md="6" className="form-group">
                <label htmlFor="feAlamat">Alamat</label>
                  <FormInput
                    id="feAlamat"
                    value="Bumi Galxy Permai, Surabaya."
                  />
                </Col>
                </Row>
                <Row form>
                {/* Tanggal Gabung */}
                <Col md="6" className="form-group">
                <label htmlFor="feIdtglGabung">Tanggal Bergabung</label>
                  <FormInput
                    id="feIdTglGabung"
                    value="28/04/2020"
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

UserMemberAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserMemberAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserMemberAccountDetails;
