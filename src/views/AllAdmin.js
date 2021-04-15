import React, { useEffect, useState } from "react";
import {
  Container, Row, Col,
  Card, CardHeader, CardBody, CardFooter,
  Button, FormSelect,
  InputGroupAddon, InputGroupText
} from "shards-react";
import addAdmin from "./FormAddAdmin";
import updateAdmin from "./UpdateAdmin";
import PageTitle from "../components/common/PageTitle";
import { GETALLADMIN, GETUSER, GETPOSITION, GETPOSITIONBYID } from '../utils/url'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Tables = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [position, setPosition] = useState("");
  const [arrPosition, setArrPosition] = useState("");
  var number = 1;
  const [pagination_data, setPaginationData] = useState([]);
  var inc = 0;
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(GETUSER + "/" + localStorage.getItem("user"))
      if (result.data.data.position_id === 4) {
        setUser(result)
        const res = await axios.get(GETPOSITION + "/" + result.data.data.position_id)
        setPosition(res.data.data.nama_posisi)
        const pagHasil = await (await axios.get(GETALLADMIN)).data.data;
        const hasil = pagHasil.data;
        setPaginationData(pagHasil)
        setData(hasil)
        const n = [];
        for (let i = 0; i < hasil.length; i++) {
          const posHasil = await (await axios.get(GETPOSITIONBYID + "/" + hasil[i].position_id)).data.data.nama_posisi
          n.push(posHasil)
          if (i == (hasil.length - 1)) {
            setArrPosition(n);
          }
        }
      } else {
        alert('Not Authorized')
        history.push("/home")
      }
    }

    fetchData()

  }, []);

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
      <PageTitle sm="4" title={position} subtitle="halaman" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <Row>
              <Col sm="6" className="d-flex mb-sm-0">
                <h5 className="m-0">List Admin</h5>
              </Col>
              <Col sm="5" className="d-flex ml-auto">
                <FormSelect>
                  <option>Province</option>
                  <option>Jawa Timur</option>
                  <option>Kalimantan Selatan</option>
                </FormSelect>
                <FormSelect className="ml-2 mr-2">
                  <option>Region</option>
                  <option>Surabaya</option>
                  <option>Jakarta Selatan</option>
                </FormSelect>
                <Button size="md" className="btn-white" hidden={user.position_id !== 4}>
                  <a href="addAdmin">New Admin</a></Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                      </th>
                  <th scope="col" className="border-0">
                    ADMIN ID
                      </th>
                  <th scope="col" className="border-0">
                    NAME
                      </th>
                  <th scope="col" className="border-0">
                    POSITION
                      </th>
                  <th scope="col" className="border-0">
                    LOCATION
                      </th>
                  <th scope="col" className="border-0">
                    ACTION
                      </th>
                </tr>
              </thead>
              <tbody>
                {

                  data.map((item) =>
                    <tr>
                      <td>{number++}</td>
                      <td>{item.id}</td>
                      <td>{item.nama}</td>
                      <td>{arrPosition[inc++]}</td>
                      <td>{item.kota}</td>
                      <td>
                        <a href="#"><i class="material-icons">visibility</i></a>
                      </td>
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
    </Row>
  </Container>
);

}

export default Tables;
