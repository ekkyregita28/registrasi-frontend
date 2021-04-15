import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Button,
  CardFooter
} from "shards-react";

const UserMemberDetails = ({ userMemberDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={userMemberDetails.avatar}
          alt={userMemberDetails.name}
          width="190"
        />
      </div>
      <h4 className="mb-0">{userMemberDetails.name}</h4>
      <span className="text-muted d-block mb-2">{userMemberDetails.jobTitle}</span>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
      </ListGroupItem>
      
      <CardFooter align="center">
        <Button theme="danger" className="mb-2 mr-1">
            Logout
        </Button>
      </CardFooter>
    </ListGroup>
  </Card>
);

UserMemberDetails.propTypes = {
  /**
   * The user details object.
   */
   userMemberDetails: PropTypes.object
};

UserMemberDetails.defaultProps = {
  userMemberDetails: {
    name: "Dygta Mahendra",
    avatar: require("./../../images/avatars/1.jpg"),
    jobTitle: "Official Member"}
};

export default UserMemberDetails;
