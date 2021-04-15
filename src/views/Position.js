import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import AddPositionForm from "../components/components-overview/AddPositionForm";
import { GETALLPOSITION} from '../utils/url'
import axios from 'axios';

const Position = () => {
  const [data,setData]=useState([]);
  var number = 1;
  const [pagination_data, setPaginationData] = useState([]);
  const [position, setPosition] = useState("");
  useEffect(()=>{
      axios
      .get(GETALLPOSITION)
      .then((res) => {
        const result = res.data.data.data;
        const pagResult = res.data.data;
        setPaginationData(pagResult);
        setData(result);
    });
  },[])

  function handlerNextPage() {
    axios
      .get(pagination_data.next_page_url)
      .then((res) => {
        const result = res.data.data.data;
        const pagResult = res.data.data;
        setPaginationData(pagResult);
        setData(result);
      });
  }

  function handlerPrevPage() {
    axios
      .get(pagination_data.prev_page_url)
      .then((res) => {
        const result = res.data.data.data;
        const pagResult = res.data.data;
        setPaginationData(pagResult);
        setData(result);
      });
  }
  
  return(
    <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4"  className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col lg="12">
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h5 className="m-0">List Position</h5>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    ID
                  </th>
                  <th scope="col" className="border-0">
                    Nama Posisi
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  
                  data.map((item)=>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.nama_posisi}</td>
                    </tr>
                    )
                }
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="ml-auto mr-2">
              <nav>
                <ul class="pagination justify-content-end">
                  <li class="page-item"><a href="#" onClick={() => handlerPrevPage()} class="page-link">Previous</a></li>
                  <li class="page-item"><a href="#" onClick={() => handlerNextPage()} class="page-link">Next</a></li>
                </ul>
              </nav>
            </CardFooter>
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
