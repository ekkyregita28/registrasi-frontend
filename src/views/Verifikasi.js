import React, { useEffect, useState } from "react";
import {
  Container, Row, Col, Card, CardHeader, CardBody,
  FormInput, ListGroup, ListGroupItem, Form, Button
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import { useHistory, withRouter } from "react-router-dom"
import { GETDAERAHBYID, GETMEMBERBYID, GETPROVINSIBYID } from '../utils/url'
import axios from 'axios';

const Verifikasi = (props) => {
  const [member, setUser] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [daerah, setDaerah] = useState("");
  const history = useHistory();
  useEffect(() => {
    axios
      .get(GETMEMBERBYID + "/" + props.match.params.id)
      .then((res) => {
        const result = res.data.data;
        setUser(result);
        axios
          .get(GETDAERAHBYID + "/" + res.data.data.daerah_id)
          .then((res) => {
            const hasil = res.data.data.nama_daerah;
            setDaerah(hasil);
          });
        axios
          .get(GETPROVINSIBYID + "/" + res.data.data.provinsi_id)
          .then((res) => {
            const hasil = res.data.data.nama_provinsi;
            setProvinsi(hasil);
          });
      });
  }, []);
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle md="12" className="ml-sm-auto mr-sm-auto" />
      </Row>
      <Row>
        <Col lg="4">
          <Card small className="mb-4 pt-3">
            <CardHeader className="border-bottom text-center">
              <div className="mb-3 mx-auto">
                <img
                  className="rounded-circle"
                  src={"http://localhost:8000/storage/" + member.foto_profil}
                  width="300"
                />
              </div>

            </CardHeader>
            <CardBody className="text-center">
              <h4 className="mb-0">{member.nama_member}</h4>
              <h6>{member.email}</h6>
            </CardBody>
          </Card>
        </Col>
        <Col lg="8">
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h5 className="m-0">{member.status}</h5>
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feJenisKelamin">Jenis Kelamin</label>
                          <FormInput
                            id="feJenisKelamin"
                            value={member.jenis_kelamin}
                          />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feTempatTanggalLahir">Tempat dan Tanggal Lahir</label>
                          <FormInput
                            id="feTempatTanggalLahir"
                            value={member.tempat_lahir + ", " + member.tanggal_lahir}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="12" className="form-group">
                          <label htmlFor="feAlamat">Alamat</label>
                          <FormInput
                            id="feAlamat"
                            value={member.alamat + " ," + member.kelurahan + " ,Kecamatan " + member.kecamatan +
                            " ,Kota " + member.kota}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feRegion">Region</label>
                          <FormInput
                            id="feRegion"
                            value={daerah}/>
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feProvinsi">Provinsi</label>
                          <FormInput
                            id="feProvinsi"
                            value={provinsi}/>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feNoTelp">No Telp</label>
                          <FormInput
                            id="feNoTelp"
                            value={member.no_telp} />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feSekolahUniv">Sekolah/Universitas</label>
                          <FormInput
                            id="feSekolahUniv"
                            value={member.sekolah} />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feHobby">Hobby</label>
                          <FormInput
                            id="feHobby"
                            value={member.hobby} />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feUkuranBaju">Ukuran Baju</label>
                          <FormInput
                            id="feUkuranBaju"
                            value={member.ukuran_baju}/>
                        </Col>
                      </Row>
                      <Row className="d-flex">
                        <Col align="right">
                          <Button href={"../verifikasi-next/" + props.match.params.id}>Next</Button>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(Verifikasi);
