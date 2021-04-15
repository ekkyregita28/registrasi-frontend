import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Button,
  CardBody, CardFooter
} from "shards-react";

const MemberDetails = ({ memberDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={memberDetails.avatar}
          width="300"
        />
      </div>
      
    </CardHeader>
    <CardBody className="text-center">
      <h4 className="mb-0">{memberDetails.name}</h4>
      <h6>{memberDetails.email}</h6>
    </CardBody>
  </Card>
);

MemberDetails.propTypes = {
  /**
   * The user details object.
   */
   memberDetails: PropTypes.object
};

MemberDetails.defaultProps = {
  memberDetails: {
    name: "Dygta Mahendra",
    avatar: require("./../../images/avatars/1.jpg"),
    email: "deviwulandari@gmail.com"},
};

export default MemberDetails;
