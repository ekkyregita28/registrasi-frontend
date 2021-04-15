import React, { useEffect, useState } from "react";
import {
  Container, Row, Col, Card, CardHeader, CardBody,
  FormInput, ListGroup, ListGroupItem, Form, Button, FormRadio
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import { useHistory, withRouter } from "react-router-dom"
import { GETUSER, GETMEMBERBYID, UPDATELOLOSVERIFIKASI, CREATEVERIFICATIONHISTORY, GENERATENUMBER } from '../utils/url'
import axios from 'axios';
import { user } from "../utils/auth";

const Verifikasi2 = (props) => {
  const [member, setUser] = useState("");
  const [admin, setAdmin] = useState("");
  const [nomor, setNomor] = useState("");
  const history = useHistory();
  const [isLolos, setIsLolos] = useState("");
  const [keterangan_tambahan, setKeteranganTambahan] = useState("");
  useEffect(() => {
    axios
      .get(GETMEMBERBYID + "/" + props.match.params.id)
      .then((res) => {
        const result = res.data.data;
        setUser(result);
        setNomor(result.nomor_keanggotaan)
      });
    axios
      .get(GETUSER + "/" + localStorage.getItem("user"))
      .then((res) => {
        const result = res.data.data;
        setAdmin(result);
      });
  }, []);

  function getNomorKeanggotaan() {
    if (member.nomor_keanggotaan === null) {
      return "Tidak"
    }

    else {
      return "Ya"
    }

  }
  function showGenerateNumber() {
    if (admin.position_id === 3 && member.nomor_keanggotaan == null)
      return false
    else
      return true
  }

  function generateNumber(){
    axios
    .get(GENERATENUMBER)
    .then((res)=>{
      const result = res.data;
      setNomor(result)
    })
  }

  const onSubmit = () => {
    var tahap = '';
    var tahap_curr = admin.position_id;
    var regist_id = member.registration_id;
    var status = '';
    var desc1 = 'Lolos Verifikasi';
    var desc2 = 'Sedang Diproses'
    var nomor_keanggotaan = '';
    if (isLolos) {
      if (admin.position_id === 3) {
        tahap = admin.position_id;
        if (member.status === 'pengajuan penonaktifan')
          status = 'nonaktif';
        else
          status = 'aktif';
        nomor_keanggotaan = nomor;
      } else {
        tahap = admin.position_id + 1;
        status = member.status;
        nomor_keanggotaan = member.nomor_keanggotaan;
      }
    } else {
      tahap = admin.position_id - 1;
      status = member.status;
      nomor_keanggotaan = member.nomor_keanggotaan;
      desc1 = 'Gagal Verifikasi ' + keterangan_tambahan
    }
    
    axios
      .post(CREATEVERIFICATIONHISTORY, {
        registration_id: regist_id,
        status: tahap_curr,
        description: desc1
      }).then((res) => {
        alert("Verifikasi Berhasil")
      });

    if (admin.position_id !== 3) {
      axios
        .post(CREATEVERIFICATIONHISTORY, {
          registration_id: regist_id,
          status: tahap,
          description: desc2
        }).then((res) => {
          alert("Verifikasi Berhasil")
        });
    }

    axios
      .post(UPDATELOLOSVERIFIKASI + "/" + member.id, {
        tahap: tahap,
        status: status,
        nomor_keanggotaan: nomor_keanggotaan
      }).then((res) => {
        alert("Verifikasi Berhasil")
        if (member.status === 'pengajuan pendaftaran')
          history.push("../verifRegistrasi")
        else if (member.status === 'pengajuan update data')
          history.push("../verifUpdate")
        else
          history.push("../verifPenonaktifan")
      });
  }

  const lolosVerifikasi = () => {
    setIsLolos(true);
  }

  const gagalVerifikasi = () => {
    setIsLolos(false);
  }

  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
      </Row>
      <Row>
        <Col lg="12">
          <Card small className="mb-4">
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feNoKTP">No KTP</label>
                          <FormInput
                            id="feNoKTP"
                            value={member.no_ktp}
                          />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feNoSIM">No SIM</label>
                          <FormInput
                            id="feNoSIM"
                            value={member.no_sim}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feScanKTP">Scan KTP</label>
                          <Row form>
                            <img
                              src={"http://localhost:8000/storage/" + member.scan_ktp}
                              alt={member.scan_ktp}
                              width="200"
                            />
                          </Row>
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feScanSIM">Scan SIM</label>
                          <Row form>
                            <img
                              src={"http://localhost:8000/storage/" + member.scan_sim}
                              alt={member.scan_sim}
                              width="200"
                            />
                          </Row>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feScanSTNK">Scan STNK</label>
                          <Row form>
                            <img
                              src={"http://localhost:8000/storage/" + member.scan_stnk}
                              alt={member.scan_stnk}
                              width="200"
                            />
                          </Row>
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feScanSuratPajak">Scan Surat Pajak</label>
                          <Row form>
                            <img
                              src={"http://localhost:8000/storage/" + member.scan_surat_pajak}
                              alt={member.scan_surat_pajak}
                              width="200"
                            />
                          </Row>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="fePekerjaan">Pekerjaan</label>
                          <FormInput
                            id="fePekerjaan"
                            value={member.pekerjaan} />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feNamaPerusahaan">Nama Perusahaan</label>
                          <FormInput
                            id="feNamaPerusahaan"
                            value={member.nama_perusahaan} />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="12" className="form-group">
                          <label htmlFor="feAlamatPerusahaan">Alamat Perusahaan</label>
                          <FormInput
                            id="feAlamatPerusahaan"
                            value={member.alamat_perusahaan}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feBookingNomor">Booking Nomor</label>
                          <FormInput
                            id="feBookingNomor"
                            value={getNomorKeanggotaan()}
                          />
                        </Col>
                        {
                          showGenerateNumber()
                        }

                        <Col md="6" className="form-group">
                          <label htmlFor="feIdMember">ID Member</label>
                          <Row>
                            <Col>
                              <FormInput
                                id="feIdMember"
                                disabled={showGenerateNumber()}
                                onChange={(e) => setNomor(e.target.value)}
                                value={nomor} />
                            </Col>
                            <Col>
                              <Button theme="secondary" disabled={showGenerateNumber()} onClick={generateNumber}>Generate</Button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="8" className="form-group">
                          <label htmlFor="feVerifikasi">Verifikasi Data?</label>
                          <Row>
                            <Col md="2">
                              <FormRadio id="feVerifikasiYa" onChange={lolosVerifikasi}>Ya</FormRadio>
                            </Col>
                            <Col md="2">
                              <FormRadio id="feVerifikasiTidak" onChange={gagalVerifikasi}>Tidak</FormRadio>
                            </Col>
                            <Col md="5">
                              <FormInput
                                id="feKeterangan"
                                placeholder="Keterangan"
                                onChange={(e) => setKeteranganTambahan(e.target.value)}
                                value={keterangan_tambahan}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="d-flex">
                        <Col align="left">
                          <Button href={"../verifikasi/" + props.match.params.id}>Previous</Button>
                        </Col>
                        <Col align="right">
                          <Button href={"../edit-member/"+ props.match.params.id} className="mr-3">Edit</Button>
                          <Button onClick={onSubmit}>Submit</Button>
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

export default Verifikasi2;
