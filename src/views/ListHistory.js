import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, FormCheckbox } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Provinsi = () => (
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
                    Status
                  </th>
                  <th scope="col" className="border-0">
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2110181011</td>
                  <td>22/03/2012</td>
                  <td>Verifikasi Daerah</td>
                  <td>Sedang Diproses</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2110181011</td>
                  <td>25/03/2012</td>
                  <td>Verifikasi Daerah</td>
                  <td>Lolos</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2110181011</td>
                  <td>25/03/2012</td>
                  <td>Verifikasi Provinsi</td>
                  <td>Sedang Diproses</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
    
  </Container>
);

export default Provinsi;
