import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import AddProvinsiForm from "../components/components-overview/AddProvinsiForm";
import { DELETEPROVINSI, GETALLPROVINSI, GETPOSITION} from '../utils/url'
import axios from 'axios';

const Provinsi = () => {
  const [data,setData]=useState([]);
  const [provinsi,setProvinsi]=useState("");
  var number = 1;
  const [pagination_data, setPaginationData] = useState([]);
  const [position, setPosition] = useState("");
  useEffect(()=>{
      axios
      .get(GETALLPROVINSI)
      .then((res) => {
        const result = res.data.data.data;
        const pagResult = res.data.data;
        setPaginationData(pagResult);
        setData(result);
    });
  },[])

  function onDelete(id){
    axios
    .delete(DELETEPROVINSI + "/" + id)
    .then((res)=>{
      window.location.reload(true);
    })
    .catch((err)=>{
      alert(err);
    })
  }

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
      <PageTitle sm="4" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col lg="12">
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h5 className="m-0">List Provinsi</h5>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Nama Provinsi
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
                      <td>{item.nama_provinsi}</td>
                      <td><a href="#" onClick={()=>onDelete(item.id)}>Delete</a></td>
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
          <h6 className="m-0">Add Provinsi</h6>
        </CardHeader>
        <AddProvinsiForm/>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Provinsi;
