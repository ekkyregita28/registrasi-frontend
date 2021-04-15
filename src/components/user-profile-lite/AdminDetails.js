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

const AdminDetails = ({ adminDetails }) => (
      <div className="mb-3 mx-auto">
        <Row>
            <h3> </h3>
        </Row>
        <img
          className="rounded-square"
          align="center"
          src={adminDetails.avatar}
          alt={adminDetails.name}
          width="210"
        />
        <Row>
            <h3> </h3>
        </Row>
      </div>
);

AdminDetails.propTypes = {
  /**
   * The user details object.
   */
  adminDetails: PropTypes.object
};

AdminDetails.defaultProps = {
  adminDetails: {
    name: "Devi Andriani",
    avatar: require("./../../images/avatars/0.jpg"),
    jobTitle: "Admin Daerah"}
};

export default AdminDetails;
