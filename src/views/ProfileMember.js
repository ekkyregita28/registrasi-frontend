import React from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import MemberAccountDetails from "../components/user-profile-lite/MemberAccountDetails";

const ProfileMember = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Member Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="10">
        <MemberAccountDetails />
      </Col>
    </Row>
  </Container>
);

export default ProfileMember;
