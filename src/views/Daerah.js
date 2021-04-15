import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import AddDaerahForm from "../components/components-overview/AddDaerahForm";
import { DELETEDAERAH, GETALLDAERAH, GETUSER } from '../utils/url'
import { GETPROVINSIBYID } from '../utils/url'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Daerah = () => {
  const [data, setData] = useState([]);
  const [nama_provinsi, setNamaProvinsi] = useState([]);
  const [nama, setNama] = useState("");
  const [pagination_data, setPaginationData] = useState([]);
  const [position, setPosition] = useState("");
  const history = useHistory();
  var number = 1;
  var increment = 0;
  
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(GETUSER + "/" + localStorage.getItem("user"))
      if (result.data.data.position_id === 4) {
        const pagResult = await (await axios.get(GETALLDAERAH)).data.data;
        const result = pagResult.data;
        setPaginationData(pagResult);
        setData(result);

        var n = [];
        for (let i = 0; i < result.length; i++) {
          const res = await axios.get(GETPROVINSIBYID + "/" + result[i].provinsi_id)
          const nama = res.data.data.nama_provinsi;
          n.push(nama);
          if (i == result.length - 1) {
            setNamaProvinsi(n);
          }
        }
      }else {
        alert('Not Authorized')
        history.push("/home")
      }
    }

    fetchData()

  }, [])

function onDelete(id) {
  axios
    .delete(DELETEDAERAH + "/" + id)
    .then((res) => {
      window.location.reload(true);
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

return (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="" subtitle="" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col lg="12">
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h5 className="m-0">List Daerah</h5>
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
                    Provinsi
                  </th>
                  <th scope="col" className="border-0">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {

                  data.map((item) =>
                    <tr>
                      <td>{number++}</td>
                      <td>{item.nama_daerah}</td>
                      <td>{nama_provinsi[increment++]}</td>
                      <td><a href="#" onClick={() => onDelete(item.id)}>Delete</a></td>
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
            <h6 className="m-0">Add Daerah</h6>
          </CardHeader>
          <AddDaerahForm />
        </Card>
      </Col>
    </Row>
  </Container>
)
}

export default Daerah;
