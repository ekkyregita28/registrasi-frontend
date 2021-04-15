import React from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import AdminAccountDetails from "../components/user-profile-lite/AdminAccountDetails";

const ProfileAdmin = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Admin Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="10">
        <AdminAccountDetails />
      </Col>
    </Row>
  </Container>
);

export default ProfileAdmin;
