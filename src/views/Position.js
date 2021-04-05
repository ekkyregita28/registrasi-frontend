import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, FormCheckbox, NavItem } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import AddPositionForm from "../components/components-overview/AddPositionForm";
import { GETALLPOSITION } from '../utils/url'
import axios from 'axios';

const Position = () => {
  const [data,setData]=useState([]);
  var number = 1;
  useEffect(()=>{
      axios
      .get(GETALLPOSITION)
      .then((res) => {
        const result = res.data.data;
        setData(result);
    });
  },[])
  
  return(
    <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Halaman Posisi" subtitle="" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col lg="12">
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">List Provinsi</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Nama Posisi
                  </th>
                  <th scope="col" className="border-0">
                    Edit
                  </th>
                  <th scope="col" className="border-0">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  
                  data.map((item)=>
                    <tr>
                      <td>{number ++}</td>
                      <td>{item.nama_posisi}</td>
                      <td><a href="#">Edit</a></td>
                      <td><a href="#">Delete</a></td>
                    </tr>
                    )
                }
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
      <Col lg="8" className="mb-4">
        <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Add Position</h6>
        </CardHeader>
        <AddPositionForm/>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Position;
