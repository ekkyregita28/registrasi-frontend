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
import AdminDetails from "../user-profile-lite/AdminDetails";

const AdminAccountDetails = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
            <Col align="center">
                <AdminDetails />
            </Col>
                <Col>
                    <Row>
                        {/* Nama */}
                        <Col>
                        <h2>Devi Andriani</h2>
                        </Col>
                    </Row>
                    <br></br>
                    <Row >
                        {/* ID Admin */}
                        <Col >
                        <h5>
                            ID Admin     :   12345678
                        </h5>
                        </Col>
                    </Row>
                    <Row>
                        {/* Position */}
                        <Col >
                        <h5>
                            Position     :   Admin Daerah
                        </h5>
                        </Col>
                    </Row>
                    <Row>
                        {/* Daerah */}
                        <Col >
                        <h5>
                            Daerah     :   Surabaya
                        </h5>
                        </Col>
                    </Row>
                    <Row>
                        {/* Alamat */}
                        <Col >
                        <h5>
                            Alamat     :   Jalan Kertajaya Indah No.87
                        </h5>
                        </Col>
                    </Row>
            </Col>
        </Row>
        <Row>
            <Col align="center">
                <Button theme="danger" className="mb-2 mr-1" >
                    Logout
                </Button>
            </Col>
            <Col>

            </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

AdminAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

AdminAccountDetails.defaultProps = {
  title: "Account Details"
};

export default AdminAccountDetails;
