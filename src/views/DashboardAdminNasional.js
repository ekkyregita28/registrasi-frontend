import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter, Button} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import { useHistory } from "react-router-dom"
import { GETALLMEMBERBYADMIN , GETUSER, GETPOSITION, GETPROVINSIBYID, GETDAERAHBYID } from '../utils/url'
import axios from 'axios';

const Tables = () => {
  const [data,setData]=useState([]);
  const [position,setPosition]=useState("");
  const [recent_user,setUser]=useState("");
  const [provinsi,setProvinsi]=useState("");
  const [daerah,setDaerah]=useState("");
  const history = useHistory();
  var number = 1;
  var incrementa = 0;
  var incrementb = 0;
  useEffect(()=>{
      axios
      .get(GETUSER + "/" + localStorage.getItem("user"))
      .then((res) => {
        const result = res.data.data;
        setUser(result);
        axios
          .get(GETPOSITION + "/" + res.data.data.position_id)
          .then((res) => {
            const hasil = res.data.data.nama_posisi;
            setPosition(hasil);
        });
    });
    
    axios
      .get(GETALLMEMBERBYADMIN + "/" + localStorage.getItem("user"))
      .then((res) => {
        const result = res.data;
        setData(result);
        var n = [];
        var m = [];
        for(let i=0; i< result.length; i++){
          axios
          .get(GETPROVINSIBYID + "/" + result[i].provinsi_id)
          .then((res)=>{
            const hasil = res.data.data.nama_provinsi;
              n.push(hasil);
              if(i == (result.length-1)){
                setProvinsi(n);
              }
          });
          axios
          .get(GETDAERAHBYID + "/" + result[i].daerah_id)
          .then((res)=>{
            const hasil = res.data.data.nama_daerah;
              m.push(hasil);
              if(i == (result.length-1)){
                setDaerah(m);
              }
          });
        }
    });
  },[])
  function redirectToAddMember() {
    history.push("/addMember")
  }
  return(
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
              <Row>
                <Col sm="6" className="d-flex mb-sm-0">
                  <h5 className="m-0">Pengajuan Pendaftaran</h5>
                </Col>
                <Col align="right" className="mr-5">
                  <Button size="md"  hidden={recent_user.position_id !== 1} onClick={redirectToAddMember}>Buat Pengajuan Pendaftaran</Button>
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
                        Verifikasi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                  
                    data.map(item=>{
                      return item.status === 'pengajuan pendaftaran' && item.tahap === recent_user.position_id ?
                      <tr>
                        <td>{number ++}</td>
                        <td>{item.registration_id}</td>
                        <td>{item.nama_member}</td>
                        <td>{daerah[incrementa++]}</td>
                        <td>{provinsi[incrementb++]}</td>
                        <td><a href={"verifikasi/" + item.id}>Verifikasi</a></td>
                      </tr>
                      :
                      void 0
                    })
                  }   
                  </tbody>
                </table>
              </CardBody>
            </Card>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h5 className="m-0">Pengajuan Update Data</h5>
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
                        Verifikasi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                  
                    data.map(item=>{
                      return item.status === 'pengajuan update data'?
                      <tr>
                        <td>{number ++}</td>
                        <td>{item.registration_id}</td>
                        <td>{item.nama_member}</td>
                        <td>{daerah[incrementa++]}</td>
                        <td>{provinsi[incrementb++]}</td>
                        <td><a href={"verifikasi/" + item.id}>Verifikasi</a></td>
                      </tr>
                      :
                      void 0
                    })
                  } 
                  </tbody>
                </table>
              </CardBody>
            </Card>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h5 className="m-0">Pengajuan Penonaktifan</h5>
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
                        Verifikasi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                  
                    data.map(item=>{
                      return item.status === 'pengajuan penonaktifan'?
                      <tr>
                        <td>{number ++}</td>
                        <td>{item.registration_id}</td>
                        <td>{item.nama_member}</td>
                        <td>{daerah[incrementa++]}</td>
                        <td>{provinsi[incrementb++]}</td>
                        <td><a href={"verifikasi/" + item.id}>Verifikasi</a></td>
                      </tr>
                      :
                      void 0
                    })
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

export default Tables;
