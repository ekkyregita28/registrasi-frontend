import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form, FormInput, FormGroup, FormSelect, FormCheckbox,
  Button, FormRadio
} from "shards-react";
import { GETUSER, CREATEMEMBER } from '../utils/url'
import axios from 'axios';
import { useHistory } from "react-router-dom"

const FormAddMember = () => {
  const [admin, setAdmin] = useState("");
  const [provinsi_id, setIdProvinsi] = useState("");
  const [daerah_id, setIdDaerah] = useState("");
  const [nama_member, setNamaMember] = useState("");
  const [sekolah, setSekolah] = useState("");
  const [email, setEmail] = useState("");
  const [jenis_kelamin, setJenisKelamin] = useState("");
  const [agama, setAgama] = useState("");
  const [foto_profil, setFotoProfil] = useState("");
  const [tanggal_lahir, setTanggalLahir] = useState("");
  const [tempat_lahir, setTempatLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kota, setKota] = useState("");
  const [kode_pos, setKodePos] = useState("");
  const [no_telp, setNoTelp] = useState("");
  const [hobby, setHobby] = useState("");
  const [ukuran_baju, setUkuranBaju] = useState("");
  const [no_ktp, setNoKtp] = useState("");
  const [no_sim, setNoSim] = useState("");
  const [scan_ktp, setScanKtp] = useState("");
  const [scan_sim, setScanSim] = useState("");
  const [scan_stnk, setScanStnk] = useState("");
  const [scan_surat_pajak, setScanSuratPajak] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [nama_perusahaan, setNamaPerusahaan] = useState("");
  const [alamat_perusahaan, setAlamatPerusahaan] = useState("");
  const [kota_perusahaan, setKotaPerusahaan] = useState("");
  const [kode_pos_perusahaan, setKodePosPerusahaan] = useState("");
  const [foto_kendaraan, setFotoKendaraan] = useState("");
  const [status_nikah, setStatusNikah] = useState("");
  const [nomor_keanggotaan, setNomorKeanggotaan] = useState("");
  const [tahap, setTahap] = useState("");
  const [status, setStatus] = useState("");
  const [step_one, setIsStepOne] = useState("");
  const history = useHistory();
  const [book, setBook] = useState("");

  useEffect(() =>{
    axios
      .get(GETUSER + "/" + localStorage.getItem("user"))
      .then((res) => {
        const result = res.data.data;
        setAdmin(result);
        setIdProvinsi(result.provinsi_id)
        setIdDaerah(result.daerah_id)
        setTahap(2)
        setStatus('pengajuan pendaftaran')
        
    });
  },[]);

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('ukuran_baju', ukuran_baju);
    formData.append('hobby', hobby);
    formData.append('nama_member', nama_member);
    formData.append('sekolah', sekolah);
    formData.append('email', email);
    formData.append('jenis_kelamin', jenis_kelamin);
    formData.append('agama', agama);
    formData.append('foto_profil', foto_profil);
    formData.append('tanggal_lahir', tanggal_lahir);
    formData.append('tempat_lahir', tempat_lahir);
    formData.append('alamat', alamat);
    formData.append('kelurahan', kelurahan);
    formData.append('kecamatan', kecamatan);
    formData.append('kota', kota);
    formData.append('kode_pos', kode_pos);
    formData.append('no_telp', no_telp);
    formData.append('no_ktp', no_ktp);
    formData.append('no_sim', no_sim);
    formData.append('scan_ktp', scan_ktp);
    formData.append('scan_sim', scan_sim);
    formData.append('scan_stnk', scan_stnk);
    formData.append('scan_surat_pajak', scan_surat_pajak);
    formData.append('pekerjaan', pekerjaan);
    formData.append('nama_perusahaan', nama_perusahaan);
    formData.append('alamat_perusahaan', alamat_perusahaan);
    formData.append('kota_perusahaan', kota_perusahaan);
    formData.append('kode_pos_perusahaan', kode_pos_perusahaan);
    formData.append('foto_kendaraan', foto_kendaraan);
    formData.append('status_nikah', status_nikah);
    formData.append('nomor_keanggotaan', nomor_keanggotaan);
    formData.append('tahap', tahap);
    formData.append('status', status);
    formData.append('provinsi_id',provinsi_id);
    formData.append('daerah_id',daerah_id);

    axios
    .post(CREATEMEMBER, 
      formData,{
        headers : {
          'Content-Type' : 'multipart/form-data'
        }
    })
    .then((res) => {
        alert('Pengajuan Pendaftaran Berhasil Dibuat')
        history.push("/addMember")
    }).catch((err) => {
        alert(" (" + err.message + ")");
        console.log(err);
    });

    console.warn(nama_member,
      email,
      sekolah,
      jenis_kelamin,
      foto_profil,
      tempat_lahir,
      tanggal_lahir,
      agama,
      alamat,
      kelurahan,
      kecamatan,
      kota,
      kode_pos,
      no_telp,
      hobby,
      ukuran_baju,
      no_ktp,
      no_sim,
      scan_ktp,
      scan_sim,
      scan_stnk,
      scan_surat_pajak,
      pekerjaan,
      nama_perusahaan,
      alamat_perusahaan,
      kota_perusahaan,
      kode_pos_perusahaan,
      foto_kendaraan,
      daerah_id,
      provinsi_id)
  }

  const isStepOne = () =>{
    setIsStepOne(false)
  }

  const isStepTwo = () =>{
    setIsStepOne(true)
  }

  const booking = () => {
    setBook(true);
  }

  const notBooking = () => {
    setBook(false);
  }

  return (
    <div>
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
        </Row>
        <Row>
          <Col lg="12" className="mb-4">
            <Card small>
              <CardHeader className="border-bottom">
                <h6 className="m-0">Form Pengajuan Registrasi</h6>
              </CardHeader>
              <ListGroup flush hidden={step_one}>
                <ListGroupItem className="p-3">
                  <Row>
                    <Col>
                      <Form>
                      <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="feInputKelurahan">Nama</label>
                            <FormInput
                              id="feInputKelurahan"
                              placeholder="Nama"
                              onChange={(e) => setNamaMember(e.target.value)}
                              value={nama_member}
                            />
                          </Col>
                          <Col md="2"></Col>
                          <Col md="4">
                          <label htmlFor="feInputKelurahan">Email</label>
                            <FormInput
                              type="email"
                              id="feInputKelurahan"
                              placeholder="Email"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                            />
                          </Col>
                        </Row>

                        <Row form>
                        <Col md="6" className="form-group">
                            <label htmlFor="feJenisKelamin">Jenis Kelamin</label>
                            <Row>
                              <Col sm="3">
                                <FormRadio
                                  onChange={(e) => setJenisKelamin('Laki-Laki')}
                                  value={jenis_kelamin} id="feJenisKelaminLaki-Laki">Laki-Laki</FormRadio>
                              </Col>
                              <Col>
                                <FormRadio
                                  onChange={(e) => setJenisKelamin('Perempuan')}
                                  value={jenis_kelamin}
                                  id="feJenisKelaminPerempuan">Perempuan</FormRadio>
                              </Col>
                            </Row>
                          </Col>
                          <Col md="4">
                            <label htmlFor="feUploadSTNK">Upload Foto</label>
                            <div className="custom-file mb-3">
                              <input type="file"
                                onChange={(e) => setFotoProfil(e.target.files[0])}
                                className="custom-file-input" id="customFile2" />
                              <label className="custom-file-label" htmlFor="customFile2">
                                Choose your file...
                                </label>
                            </div>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="feTempatLahir">Tempat Lahir</label>
                            <FormInput
                              id="feTempatLahir"
                              placeholder="Tempat Lahir"
                              onChange={(e) => setTempatLahir(e.target.value)}
                              value={tempat_lahir}
                            />
                          </Col>
                          <Col md="2"></Col>
                          <Col md="4">
                            <label htmlFor="feTanggalLahir">Tanggal Lahir</label>
                            <FormInput
                              type="date"
                              placeholder="Tahun"
                              onChange={(e) => setTanggalLahir(e.target.value)} />
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="6" className="form-group">
                            <label htmlFor="feJenisKelamin">Status Nikah</label>
                            <Row>
                              <Col sm="3">
                                <FormRadio
                                  onChange={(e) => setStatusNikah('Ya')}
                                  value={status_nikah} id="feJenisKelaminLaki-Laki">Ya</FormRadio>
                              </Col>
                              <Col>
                                <FormRadio
                                  onChange={(e) => setStatusNikah('Tidak')}
                                  value={status_nikah}
                                  id="feJenisKelaminPerempuan">Tidak</FormRadio>
                              </Col>
                            </Row>
                          </Col>
                          <Col md="4">
                            <label htmlFor="feAgama">Agama</label>
                            <FormSelect id="feAgama"
                              onClick={(e) => setAgama(e.target.value)}>
                              <option value="Islam">Islam</option>
                              <option value="Kristen Protestan">Kristen Protestan</option>
                              <option value="Kristen Katolik">Kristen Katolik</option>
                              <option value="Hindu">Hindu</option>
                              <option value="Budha">Budha</option>
                              <option value="Konghucu">Konghucu</option>
                            </FormSelect>
                          </Col>
                        </Row>


                        <FormGroup>
                          <label htmlFor="feInputAlamat">Alamat</label>
                          <FormInput
                            id="feInputAlamat"
                            placeholder="Alamat"
                            onChange={(e) => setAlamat(e.target.value)}
                            value={alamat}
                          />
                        </FormGroup>

                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="feInputKelurahan">Kelurahan</label>
                            <FormInput
                              id="feInputKelurahan"
                              placeholder="Kelurahan"
                              onChange={(e) => setKelurahan(e.target.value)}
                              value={kelurahan}
                            />
                          </Col>
                          <Col md="2"></Col>
                          <Col md="4">
                            <label htmlFor="feInputKecamatan">Kecamatan</label>
                            <FormInput
                              id="feInputKecamatan"
                              placeholder="Kecamatan"
                              onChange={(e) => setKecamatan(e.target.value)}
                              value={kecamatan}
                            />
                          </Col>
                        </Row>

                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="feInputKota">Kota</label>
                            <FormInput
                              id="feInputKota"
                              placeholder="Kota"
                              onChange={(e) => setKota(e.target.value)}
                              value={kota}
                            />
                          </Col>
                          <Col md="2"></Col>
                          <Col md="4">
                            <label htmlFor="feInputKodePos">Kode Pos</label>
                            <FormInput
                              id="feInputKodePos"
                              placeholder="Kode Pos"
                              onChange={(e) => setKodePos(e.target.value)}
                              value={kode_pos}
                            />
                          </Col>
                        </Row>

                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="feInputNoTelp">No Telp</label>
                            <FormInput
                              id="feInputNoTelp"
                              placeholder="No Telp"
                              onChange={(e) => setNoTelp(e.target.value)}
                              value={no_telp}
                            />
                          </Col>
                          <Col md="2"></Col>
                          <Col md="4">
                            <label htmlFor="feEmailAddress">Sekolah</label>
                            <FormInput
                              id="feSekolah"
                              placeholder="Sekolah"
                              onChange={(e) => setSekolah(e.target.value)}
                              value={sekolah}
                            />
                          </Col>
                        </Row>

                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="feInputHobby">Hobby</label>
                            <FormInput
                              id="feInputHobby"
                              placeholder="Hobby"
                              onChange={(e) => setHobby(e.target.value)}
                              value={hobby}
                            />
                          </Col>
                          <Col md="2"></Col>
                          <Col md="4">
                            <label htmlFor="feUkuranBaju">Ukuran Baju</label>
                            <FormSelect id="feUkuranBaju" onClick={(e) => setUkuranBaju(e.target.value)}>
                              <option value="S">S</option>
                              <option value="M">M</option>
                              <option value="L">L</option>
                              <option value="XL">XL</option>
                              <option value="XXL">XXL</option>
                              <option value="XXXL">XXXL</option>
                            </FormSelect>
                          </Col>
                        </Row>
                        <Row className="d-flex">
                          <Col align="right">
                            <Button onClick={isStepTwo} size="md" theme="primary">
                              Next
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
              <ListGroup flush hidden={!step_one}>
                <ListGroupItem className="p-3">
                  <Row>
                    <Col>
                      <Form>
                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="feInputNIK">NIK</label>
                            <FormInput
                              id="feInputNIK"
                              placeholder="NIK"
                              onChange={(e) => setNoKtp(e.target.value)}
                              value={no_ktp}
                            />
                          </Col>
                          <Col md="2"></Col>
                          <Col md="4">
                            <label htmlFor="feInputNomorSIM">Nomor SIM</label>
                            <FormInput
                              id="feInputKNomorSIM"
                              placeholder="No SIM"
                              onChange={(e) => setNoSim(e.target.value)}
                              value={no_sim}
                            />
                          </Col>
                        </Row>

                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="feUploadKTP">Upload KTP</label>
                            <div className="custom-file mb-3">
                              <input type="file"
                                onChange={(e) => setScanKtp(e.target.files[0])}
                                className="custom-file-input" id="customFile2" />
                              <label className="custom-file-label" htmlFor="customFile2">
                                Choose your file...
                                </label>
                            </div>
                          </Col>
                          <Col md="2"></Col>
                          <Col md="4">
                            <label htmlFor="feUploadSIM">Upload SIM</label>
                            <div className="custom-file mb-3">
                              <input type="file"
                                onChange={(e) => setScanSim(e.target.files[0])}
                                className="custom-file-input" id="customFile2" />
                              <label className="custom-file-label" htmlFor="customFile2">
                                Choose your file...
                                </label>
                            </div>
                          </Col>
                        </Row>

                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="feUploadSTNK">Upload STNK</label>
                            <div className="custom-file mb-3">
                              <input type="file"
                                onChange={(e) => setScanStnk(e.target.files[0])}
                                className="custom-file-input" id="customFile2" />
                              <label className="custom-file-label" htmlFor="customFile2">
                                Choose your file...
                                </label>
                            </div>
                          </Col>
                          <Col md="2"></Col>
                          <Col md="4">
                            <label htmlFor="feUploadPajak">Upload Surat Pajak</label>
                            <div className="custom-file mb-3">
                              <input type="file"
                                onChange={(e) => setScanSuratPajak(e.target.files[0])}
                                className="custom-file-input" id="customFile2" />
                              <label className="custom-file-label" htmlFor="customFile2">
                                Choose your file...
                                </label>
                            </div>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="feUploadSTNK">Upload Foto Kendaraan</label>
                            <div className="custom-file mb-3">
                              <input type="file"
                                onChange={(e) => setFotoKendaraan(e.target.files[0])}
                                className="custom-file-input" id="customFile2" />
                              <label className="custom-file-label" htmlFor="customFile2">
                                Choose your file...
                                </label>
                            </div>
                          </Col>
                        </Row>

                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="feInputPekerjaan">Pekerjaan</label>
                            <FormInput
                              id="feInputPekerjaan"
                              placeholder="Pekerjaan"
                              onChange={(e) => setPekerjaan(e.target.value)}
                              value={pekerjaan}
                            />
                          </Col>
                          <Col md="2"></Col>
                          <Col md="4">
                            <label htmlFor="fePerusahaan">Nama Perusahaan</label>
                            <FormInput
                              id="fePerusahaan"
                              placeholder="Perusahaan"
                              onChange={(e) => setNamaPerusahaan(e.target.value)}
                              value={nama_perusahaan}
                            />
                          </Col>
                        </Row>

                        <FormGroup>
                          <label htmlFor="feInputAlamatPerusahaan">Alamat Perusahaan</label>
                          <FormInput
                            id="feInputAlamatPerusahaan"
                            placeholder="AlamatPerusahaan"
                            onChange={(e) => setAlamatPerusahaan(e.target.value)}
                            value={alamat_perusahaan}
                          />
                        </FormGroup>

                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="feInputKota">Kota Perusahaan</label>
                            <FormInput
                              id="feInputKota"
                              placeholder="Kota"
                              onChange={(e) => setKotaPerusahaan(e.target.value)}
                              value={kota_perusahaan}
                            />
                          </Col>
                          <Col md="2"></Col>
                          <Col md="4">
                            <label htmlFor="feInputKodePos">Kode Pos Perusahaan</label>
                            <FormInput
                              id="feInputKodePos"
                              placeholder="Kode Pos"
                              onChange={(e) => setKodePosPerusahaan(e.target.value)}
                              value={kode_pos_perusahaan}
                            />
                          </Col>
                        </Row>


                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="feInputHobby">Booking Nomor?</label>
                            <Row>
                              <Col sm="3">
                                <FormRadio onChange={booking} id="feYaBooking">Ya</FormRadio>
                              </Col>
                              <Col>
                                <FormRadio onChange={notBooking} id="feTidakBooking">Tidak</FormRadio>
                              </Col>
                            </Row>
                          </Col>
                          <Col md="2">
                            <label htmlFor="feInputNoBooking">Nomor Booking</label>
                            <FormInput
                              id="feInputNoBooking"
                              placeholder="Nomor Booking"
                              disabled={!book}
                              onChange={(e) => setNomorKeanggotaan(e.target.value)}
                              value={nomor_keanggotaan}
                            />
                          </Col>
                        </Row>
                        <Row className="d-flex">
                          <Col align="left">
                            <Button onClick={isStepOne} theme="primary">Previous</Button>
                          </Col>
                          <Col align="right">
                            <Button size="md" onClick={onSubmit}>Submit</Button>
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
    </div>
  )
}

export default FormAddMember;
