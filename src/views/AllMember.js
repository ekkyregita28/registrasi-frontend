import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter, FormSelect } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import { useHistory } from "react-router-dom"
import { GETMEMBERBYADMINAKTIF, GETUSER, GETPOSITION, GETPROVINSIBYID, GETDAERAHBYID } from '../utils/url'
import { user } from '../utils/auth'
import axios from 'axios';

const AllMember = () => {
  const [data, setData] = useState([]);
  const [position, setPosition] = useState("");
  const [recent_user, setUser] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [daerah, setDaerah] = useState("");
  const [pagination_data, setPaginationData] = useState([]);
  const history = useHistory();
  var number = 1;
  var incrementa = 0;
  var incrementb = 0;
  useEffect(() => {
    async function fetchData() {
      const userRes = await (await axios.get(GETUSER + "/" + localStorage.getItem("user"))).data.data
      setUser(userRes)

      const posRes = await (await axios.get(GETPOSITION + "/" + userRes.position_id)).data.data.nama_posisi
      setPosition(posRes)

      const memberPagRes = await (await axios.get(GETMEMBERBYADMINAKTIF + "/" + localStorage.getItem("user"))).data
      const memberRes = memberPagRes.data
      setPaginationData(memberPagRes)
      setData(memberRes)
      var n = [];
      var m = [];
      for (let i = 0; i < memberRes.length; i++) {
        const provRes = await (await axios.get(GETPROVINSIBYID + "/" + memberRes[i].provinsi_id)).data.data.nama_provinsi
        n.push(provRes)
        if (i == (memberRes.length - 1)) {
          setProvinsi(n);
        }

        const daerahRes = await (await axios.get(GETDAERAHBYID + "/" + memberRes[i].daerah_id)).data.data.nama_daerah
        m.push(daerahRes)
        if (i == (memberRes.length - 1)) {
          setDaerah(m);
        }  
      }
    }

    fetchData()
  }, [])

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
        <PageTitle sm="4" title={position} subtitle="Home" className="text-sm-left" />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
            <Col sm="6" className="d-flex mb-sm-0">
                  <h5 className="m-0">List Member</h5>
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
                </Col>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                      </th>
                    <th scope="col" className="border-0">
                      Registration ID
                      </th>
                    <th scope="col" className="border-0">
                      Nama
                      </th>
                    <th scope="col" className="border-0">
                      Daerah
                      </th>
                    <th scope="col" className="border-0">
                      Provinsi
                      </th>
                    <th scope="col" className="border-0">
                      Status
                      </th>
                    <th scope="col" className="border-0">
                      Action
                      </th>
                  </tr>
                </thead>
                <tbody>
                  {

                    data.map((item) => 
                        <tr>
                          <td>{number++}</td>
                          <td>{item.registration_id}</td>
                          <td>{item.nama_member}</td>
                          <td>{daerah[incrementa++]}</td>
                          <td>{provinsi[incrementb++]}</td>
                          <td>{item.status}</td>
                          <td>
                            <a href=""><i class="material-icons">edit</i></a>
                            <a href={"data-member/" + item.id}><i class="material-icons">visibility</i></a>
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

export default AllMember;
