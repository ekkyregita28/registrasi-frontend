import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, FormCheckbox, Button } from "shards-react";
import MultiStep from 'react-multistep';
import PageTitle from "../components/common/PageTitle";

const HakAksesTable = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Hak Akses Page" subtitle="" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">List Hak Akses</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Nama Hak Akses
                  </th>
                  <th scope="col" className="border-0">
                    Superadmin
                  </th>
                  <th scope="col" className="border-0">
                    Admin Nasional
                  </th>
                  <th scope="col" className="border-0">
                    Admin Provinsi
                  </th>
                  <th scope="col" className="border-0">
                    Admin Daerah
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Hak Akses 1</td>
                  <td><FormCheckbox></FormCheckbox></td>
                  <td><FormCheckbox></FormCheckbox></td>
                  <td><FormCheckbox></FormCheckbox></td>
                  <td><FormCheckbox></FormCheckbox></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Hak Akses 2</td>
                  <td><FormCheckbox></FormCheckbox></td>
                  <td><FormCheckbox></FormCheckbox></td>
                  <td><FormCheckbox></FormCheckbox></td>
                  <td><FormCheckbox></FormCheckbox></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hak Akses 3</td>
                  <td><FormCheckbox></FormCheckbox></td>
                  <td><FormCheckbox></FormCheckbox></td>
                  <td><FormCheckbox></FormCheckbox></td>
                  <td><FormCheckbox></FormCheckbox></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Hak Akses 4</td>
                  <td><FormCheckbox></FormCheckbox></td>
                  <td><FormCheckbox></FormCheckbox></td>
                  <td><FormCheckbox></FormCheckbox></td>
                  <td><FormCheckbox></FormCheckbox></td>
                </tr>
              </tbody>
            </table>
            <Button type="submit" className="d-flex ml-auto mr-auto ml-sm-auto mr-sm-5 mt-3 mt-sm-0">Save Changes</Button>
          </CardBody>
        </Card>
      </Col>
    </Row> 
  </Container>
);

export default HakAksesTable;