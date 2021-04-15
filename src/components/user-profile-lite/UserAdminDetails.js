import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Button,
  CardFooter
} from "shards-react";
import { GETUSER, GETPOSITION } from '../../utils/url'
import {useHistory} from 'react-router-dom'
import axios from 'axios';

const UserAdminDetails = ({ userAdminDetails }) => {
  const [recent_user,setUser]=useState("");
  const [position,setPosition]=useState("");
  const history = useHistory();
  useEffect(()=>{
      axios
      .get(GETUSER + "/" + localStorage.getItem("user"))
      .then((res) => {
        const result = res.data.data;
        setUser(result);
        axios
          .get(GETPOSITION + "/" + res.data.data.position_id)
          .then((res) => {
            const hasil = res.data.data.nama_posisi;
            setPosition(hasil);
        });
    });
  },[]);

  const logout = () =>{
    localStorage.removeItem("user")
    history.push("/login")
  }
  return(
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={"http://localhost:8000/storage/" + recent_user.foto_profil}
          alt={recent_user.foto_profil}
          width="190"
        />
      </div>
      <h4 className="mb-0">{recent_user.nama}</h4>
      <span className="text-muted d-block mb-2">{position}</span>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
      </ListGroupItem>
      
      <CardFooter align="center">
        <Button onClick={logout} theme="danger" className="mb-2 mr-1">
            Logout
        </Button>
      </CardFooter>
    </ListGroup>
  </Card>
  );
}

UserAdminDetails.propTypes = {
  /**
   * The user details object.
   */
   userAdminDetails: PropTypes.object
};

export default UserAdminDetails;
