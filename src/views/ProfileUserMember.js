import React from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import UserMemberDetails from "../components/user-profile-lite/UserMemberDetails";
import UserMemberAccountDetails from "../components/user-profile-lite/UserMemberAccountDetails";

const ProfileUserMember = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="User Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
    <Col lg="4">
        <UserMemberDetails />
      </Col>
      <Col lg="8">
        <UserMemberAccountDetails />
      </Col>
    </Row>
  </Container>
);

export default ProfileUserMember;
