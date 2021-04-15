import React from "react";
import PropTypes from "prop-types";
import {
  Card,
    CardBody,
    CardFooter,
  CardHeader,
  Row,
  Button
} from "shards-react";

const MemberDetails = ({ memberDetails }) => (
      <div className="mb-3 mx-auto">
        <Row>
            <h3> </h3>
        </Row>
        <img
          className="rounded-square"
          align="center"
          src={memberDetails.avatar}
          alt={memberDetails.name}
          width="210"
        />
        <Row>
            <h3> </h3>
        </Row>
      </div>
);

MemberDetails.propTypes = {
  /**
   * The user details object.
   */
  memberDetails: PropTypes.object
};

MemberDetails.defaultProps = {
  memberDetails: {
    name: "Sherly Davina",
    avatar: require("./../../images/avatars/1.jpg")
    }
};

export default MemberDetails;
