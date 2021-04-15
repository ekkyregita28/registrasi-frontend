import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import UserAdminDetails from "../components/user-profile-lite/UserAdminDetails";
import UserAdminAccountDetails from "../components/user-profile-lite/UserAdminAccountDetails";

const ProfileUserAdmin = () => {
    return (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="User Profile" subtitle="halaman" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
    <Col lg="4">
        <UserAdminDetails />
      </Col>
      <Col lg="8">
        <UserAdminAccountDetails />
      </Col>
    </Row>
  </Container>
  );
}

export default ProfileUserAdmin;
