import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, FormCheckbox, func } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import { GETLISTHISTORY, GETPOSITIONBYID } from '../utils/url'
import axios from 'axios';

const ListHistory = () => {
  const [data, setData] = useState([]);
  const [position, setPosition] = useState([]);
  var number = 1;
  var increment = 0;
  useEffect(() => {
    async function fetchData() {
      const listResult = await (await axios.get(GETLISTHISTORY + "/" + localStorage.getItem("member"))).data.data
      setData(listResult)
      var n = [];
      for (let i = 0; i < listResult.length; i++) {
        const posResult = await (await axios.get(GETPOSITIONBYID + "/" + listResult[i].status)).data.data.nama_posisi
        n.push(posResult)
        if (i == (listResult.length - 1)) {
          setPosition(n);
        }
      }
    }
   fetchData()
  }, [])
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Halaman Tracking" subtitle="" className="text-sm-left" />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col lg="12">
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">List History</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                      </th>
                    <th scope="col" className="border-0">
                      ID Registrasi
                      </th>
                    <th scope="col" className="border-0">
                      Tanggal
                      </th>
                    <th scope="col" className="border-0">
                      Tahap
                      </th>
                    <th scope="col" className="border-0">
                      Status
                      </th>
                  </tr>
                </thead>
                <tbody>
                  {

                    data.map((item) =>
                      <tr>
                        <td>{number++}</td>
                        <td>{item.registration_id}</td>
                        <td>{item.created_at}</td>
                        <td>{position[increment++]}</td>
                        <td>{item.description}</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </Container>
  );

}

export default ListHistory;
