import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import { GETUSER} from '../../../../utils/url'
import axios from 'axios';

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      recent_user : ''
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  componentDidMount = () =>{
    axios
    .get(GETUSER + "/" + localStorage.getItem("user"))
    .then((res) => {
      const result = res.data.data;
      this.setState({recent_user: result});
    });
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/logo-user.png")}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">{this.state.recent_user.nama}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="profile-user-admin">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
