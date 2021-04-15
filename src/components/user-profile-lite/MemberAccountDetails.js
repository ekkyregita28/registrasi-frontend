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
import MemberDetails from "../user-profile-lite/MemberDetails";

const MemberAccountDetails = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
            <Col align="center">
                <MemberDetails />
            </Col>
                <Col>
                    <Row>
                        {/* Nama */}
                        <Col>
                        <h2>Johan Maheswara</h2>
                        </Col>
                    </Row>
                    <br></br>
                    <Row >
                        {/* Nomor Anggota */}
                        <Col >
                        <h5>
                            Nomor Anggota     :   6732907
                        </h5>
                        </Col>
                    </Row>
                    <Row>
                        {/* NIK */}
                        <Col >
                        <h5>
                            NIK     :   3517074992000761
                        </h5>
                        </Col>
                    </Row>
                    <Row>
                        {/* Alamat */}
                        <Col >
                        <h5>
                            Alamat     :   Kutisari Indah Utara Blok C29
                        </h5>
                        </Col>
                    </Row>
                    <Row>
                        {/* Tanggal Gabung */}
                        <Col >
                        <h5>
                            Tanggal Gabung     :   27/08/2020
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

MemberAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

MemberAccountDetails.defaultProps = {
  title: "Account Details"
};

export default MemberAccountDetails;
