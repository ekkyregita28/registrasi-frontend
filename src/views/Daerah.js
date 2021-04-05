import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, FormCheckbox, NavItem } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import AddDaerahForm from "../components/components-overview/AddDaerahForm";
import { GETALLDAERAH } from '../utils/url'
import { GETPROVINSIBYID } from '../utils/url'
import axios from 'axios';

const Daerah = () => {
  const [data,setData]=useState([]);
  const [provinsi,setProvinsi]=useState("");
  var number = 1;
  useEffect(()=>{
      axios
      .get(GETALLDAERAH)
      .then((res) => {
        const result = res.data.data;
        setData(result);
    });
  },[])

  function getProvinsi(id){
    axios
    .get(GETPROVINSIBYID + "/" + id)
    .then((res)=>{
      const hasil = res.data.data.nama_provinsi;
      setProvinsi(hasil);
    });
    return provinsi;
  }
  
  return(
    <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Halaman Daerah" subtitle="" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col lg="12">
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">List Daerah</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Nama Daerah
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
                      <td>{number++}</td>
                      <td>{item.nama_daerah}</td>
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
          <h6 className="m-0">Add Daerah</h6>
        </CardHeader>
        <AddDaerahForm/>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Daerah;
