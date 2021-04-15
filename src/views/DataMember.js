import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom"
import {
  Container,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import { useHistory } from "react-router-dom"
import { GETDAERAHBYID, GETMEMBERBYID, GETPROVINSIBYID, NONAKTIFMEMBER } from '../utils/url'
import axios from 'axios';
//import penonaktifan from "./verifikasi/Penonaktifan";

const DataMember = (dataMember) => {
  const [member, setMember] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [daerah, setDaerah] = useState("");
  const history = useHistory();
  useEffect(() => {
    axios
      .get(GETMEMBERBYID + "/" + dataMember.match.params.id)
      .then((res) => {
        const result = res.data.data;
        setMember(result);
        axios
          .get(GETDAERAHBYID + "/" + res.data.data.daerah_id)
          .then((res) => {
            const hasil = res.data.data.nama_daerah;
            setProvinsi(hasil);
          });
        axios
          .get(GETPROVINSIBYID + "/" + res.data.data.provinsi_id)
          .then((res) => {
            const hasil = res.data.data.nama_provinsi;
            setDaerah(hasil);
          });
      });
  }, []);

  const nonaktifkan = () =>{
      axios
      .post(NONAKTIFMEMBER + "/" + member.id)
      .then((res)=>{
        alert('Penonaktifan Berhasil Diproses')
        history.push("/allMembers")
      }).catch((err) => {
        alert("(" + err.message + ")");
        console.log(err);
    });
  }
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle title="" subtitle="" md="12" className="ml-sm-auto mr-sm-auto" />
      </Row>
      <Row>
        <Col lg="12">
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h5 className="m-0">Detail Member</h5>
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form>
                      <Row>
                        <Col md="6" align="left">
                          <img
                            className="rounded-circle"
                            src={"http://localhost:8000/storage/" + member.foto_profil}
                            alt={member.foto_profil}
                            width="200"
                          />
                        </Col>
                        <Col md="6" align="right">
                          <img
                            className="rounded-circle"
                            src={dataMember.fotoKendaraan}
                            width="200"
                          />
                        </Col>
                      </Row>
                      <Row form className="mt-4">
                        <Col md="6" className="form-group">
                          <label htmlFor="feNama">Nama</label>
                          <FormInput
                            id="feNama" readonly
                            value={member.nama_member}
                          />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feNIK">NIK</label>
                          <FormInput
                            id="feNIK" readonly
                            value={member.no_ktp}
                          />
                        </Col>
                      </Row>
                      <Row form className="mt-4">
                        <Col md="6" className="form-group">
                          <label htmlFor="feTempatLahir">Tempat Lahir</label>
                          <FormInput
                            id="feTempatLahir" readonly
                            value={member.tempat_lahir}
                          />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feTanggalLahir">Tanggal Lahir</label>
                          <FormInput
                            id="feTanggalLahir" readonly
                            value={member.tanggal_lahir}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feJenisKelamin">Jenis Kelamin</label>
                          <FormInput
                            id="feJenisKelamin" readonly
                            value={member.jenis_kelamin}
                          />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feTanggalGabung">Tanggal Gabung</label>
                          <FormInput
                            id="feTanggalGabung" readonly
                            value={member.created_at}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="12" className="form-group">
                          <label htmlFor="feAlamat">Alamat</label>
                          <FormInput
                            id="feAlamat" readonly
                            value={member.alamat + " ," + member.kelurahan + " ,Kecamatan " + member.kecamatan +
                              " ,Kota " + member.kota}
                          />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feRegion">Region</label>
                          <FormInput
                            id="feRegion" readonly
                            value={provinsi} />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feProvinsi">Provinsi</label>
                          <FormInput
                            id="feProvinsi" readonly
                            value={daerah} />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feNoTelp">No Telp</label>
                          <FormInput
                            id="feNoTelp" readonly
                            value={member.no_telp} />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feSekolahUniv">Sekolah/Universitas</label>
                          <FormInput
                            id="feSekolahUniv" readonly
                            value={member.sekolah} />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feHobby">Hobby</label>
                          <FormInput
                            id="feHobby" readonly
                            value={member.hobby} />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feUkuranBaju">Ukuran Baju</label>
                          <FormInput readonly
                            value={member.ukuran_baju} />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feNoKTP">No KTP</label>
                          <FormInput
                            id="feNoKTP" readonly
                            value={member.no_ktp}
                          />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feNoSIM">No SIM</label>
                          <FormInput
                            id="feNoKTP" readonly
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
                            id="fePekerjaan" readonly
                            value={member.pekerjaan} />
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feNamaPerusahaan">Nama Perusahaan</label>
                          <FormInput
                            id="feNamaPerusahaan" readonly
                            value={member.nama_perusahaan} />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="12" className="form-group">
                          <label htmlFor="feAlamatPerusahaan">Alamat Perusahaan</label>
                          <FormInput
                            id="feAlamatPerusahaan" readonly
                            value={member.alamat_perusahaan}
                          />
                        </Col>
                      </Row>
                      <Row className="d-flex">
                        <Col align="left">
                          <Button href={"../allMembers"}>Back</Button>
                        </Col>
                        <Col align="right">
                          <Button theme="danger" onClick={nonaktifkan}>Nonaktifkan</Button>
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

DataMember.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

DataMember.defaultProps = {
  dataMember: {
    title: "Account Details",
    avatar: require("./../images/avatars/1.jpg"),
    fotoKendaraan: require("./../images/avatars/1.jpg")
  },

};

export default withRouter(DataMember);
