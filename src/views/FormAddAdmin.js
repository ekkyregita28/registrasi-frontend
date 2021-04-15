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
import { CREATEADMIN, GETALLPROVINSIWOPAG, GETALLPOSITIONWOPAG, GETDAERAHBYPROVINSI } from '../utils/url'
import axios from 'axios';
import { useHistory } from "react-router-dom"

const FormAddAdmin = () => {
  const [list_provinsi,setListProvinsi] = useState([]);
  const [list_daerah,setListDaerah] = useState([]);
  const [list_position,setListPosition] = useState([]);
  const [position_id,setIdPosisi] = useState("");
  const [provinsi_id,setIdProvinsi] = useState("");
  const [nama,setNama] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [jenis_kelamin,setJenisKelamin] = useState("");
  const [agama,setAgama] = useState("");
  const [foto_profil,setFotoProfil] = useState("");
  const [tanggal_lahir,setTanggalLahir] = useState("");
  const [tempat_lahir,setTempatLahir] = useState("");
  const [daerah_id,setIdDaerah] = useState("");
  const [alamat,setAlamat] = useState("");
  const [kelurahan,setKelurahan] = useState("");
  const [kecamatan,setKecamatan] = useState("");
  const [kota,setKota] = useState("");
  const [kode_pos,setKodePos] = useState("");
  const [no_telp,setNoTelp] = useState("");
  const history = useHistory();

  useEffect(()=>{
    axios
      .get(GETALLPOSITIONWOPAG)
      .then((res) => {
        const result = res.data.data;
        setListPosition(result);
    });
    axios
      .get(GETALLPROVINSIWOPAG)
      .then((res) => {
        const result = res.data.data;
        setListProvinsi(result);
    });
  },[])

  const onChangeHandlerProvinsi = (e) =>{
      setIdProvinsi(e.target.value);
      console.log(provinsi_id);
      axios
      .get(GETDAERAHBYPROVINSI + "/" + e.target.value)
      .then((res) => {
        const result = res.data.data;
        setListDaerah(result);
    });
  }

  const onChangeHandlerDaerah = (e) =>{
    setIdDaerah(e.target.value);
  }

  const onChangeHandlerPosition = (e) =>{
    setIdPosisi(e.target.value);
  }

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('position_id',position_id);
    formData.append('provinsi_id',provinsi_id);
    formData.append('nama',nama);
    formData.append('password',password);
    formData.append('email',email);
    formData.append('jenis_kelamin',jenis_kelamin);
    formData.append('agama',agama);
    formData.append('foto_profil',foto_profil);
    formData.append('tanggal_lahir',tanggal_lahir);
    formData.append('tempat_lahir',tempat_lahir);
    formData.append('daerah_id',daerah_id);
    formData.append('alamat',alamat);
    formData.append('kelurahan',kelurahan);
    formData.append('kecamatan',kecamatan);
    formData.append('kota',kota);
    formData.append('kode_pos',kode_pos);
    formData.append('no_telp',no_telp);
    axios
        .post(CREATEADMIN, 
          formData,{
            headers : {
              'Content-Type' : 'multipart/form-data'
            }
        })
        .then((res) => {
            history.push("/allAdmin")
        }).catch((err) => {
            alert(" (" + err.message + ")");
            console.log(err);
        });
  }
  
  return(
    <div>
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
          </Row>
          <Row>
            <Col lg="12" className="mb-4">
              <Card small>
                <CardHeader className="border-bottom">
                  <h5 className="m-0">Form Add Admin</h5>
                </CardHeader>
                <ListGroup flush>
                  <ListGroupItem className="p-3">
                    <Row>
                      <Col>
                        <Form>
                          <FormGroup>
                            <label htmlFor="feInputNama">Nama</label>
                            <FormInput
                              id="feInputNama"
                              placeholder="Nama"
                              onChange={(e)=>setNama(e.target.value)}
                              value = {nama}
                            />
                          </FormGroup>

                          <Row form>
                            <Col md="4" className="form-group">
                              <label htmlFor="feInputKelurahan">Password</label>
                              <FormInput
                                type="password"
                                id="feInputKelurahan"
                                placeholder="Password"
                                onChange={(e)=>setPassword(e.target.value)}
                                value = {password}
                              />
                            </Col>
                            <Col md="2"></Col>
                            <Col md="4">
                              <label htmlFor="feUploadSTNK">Upload Foto</label>
                              <div className="custom-file mb-3">
                                <input type="file" 
                                onChange={(e)=>setFotoProfil(e.target.files[0])}
                                className="custom-file-input" id="customFile2" />
                                <label className="custom-file-label" htmlFor="customFile2">
                                  Choose your file...
                                </label>
                              </div>
                            </Col>
                          </Row>

                          <Row form>
                            <Col md="6" className="form-group">
                              <label htmlFor="feJenisKelamin">Jenis Kelamin</label>
                              <Row>
                                <Col sm="3">
                                  <FormRadio 
                                  onChange={(e)=>setJenisKelamin('Laki-Laki')}
                                  value = {jenis_kelamin}id="feJenisKelaminLaki-Laki">Laki-Laki</FormRadio>
                                </Col>
                                <Col>
                                  <FormRadio 
                                    onChange={(e)=>setJenisKelamin('Perempuan')}
                                    value = {jenis_kelamin}
                                   id="feJenisKelaminPerempuan">Perempuan</FormRadio>
                                </Col>
                              </Row>
                            </Col>
                            <Col md="4">
                              <label htmlFor="feAgama">Agama</label>
                              <FormSelect id="feAgama" 
                                onClick={(e)=>setAgama(e.target.value)}>
                                <option value = "Islam">Islam</option>
                                <option value = "Kristen Protestan">Kristen Protestan</option>
                                <option value = "Kristen Katolik">Kristen Katolik</option>
                                <option value = "Hindu">Hindu</option>
                                <option value = "Budha">Budha</option>
                                <option value = "Konghucu">Konghucu</option>
                              </FormSelect>
                            </Col>
                          </Row>

                          <Row form>
                            <Col md="4" className="form-group">
                              <label htmlFor="feTempatLahir">Tempat Lahir</label>
                              <FormInput
                                id="feTempatLahir"
                                placeholder="Tempat Lahir"
                                onChange={(e)=>setTempatLahir(e.target.value)}
                                value = {tempat_lahir}
                              />
                            </Col>
                            <Col md="2"></Col>
                            <Col md="4">
                              <label htmlFor="feTanggalLahir">Tanggal Lahir</label>
                                <FormInput
                                type="date"
                                placeholder="Tahun" 
                                onChange={(e)=>setTanggalLahir(e.target.value)}/>
                            </Col>
                          </Row>

                          <FormGroup>
                            <label htmlFor="feInputAlamat">Alamat</label>
                            <FormInput
                              id="feInputAlamat"
                              placeholder="Alamat"
                              onChange={(e)=>setAlamat(e.target.value)}
                              value={alamat}
                            />
                          </FormGroup>

                          <Row form>
                            <Col md="4" className="form-group">
                              <label htmlFor="feInputKelurahan">Kelurahan</label>
                              <FormInput
                                id="feInputKelurahan"
                                placeholder="Kelurahan"
                                onChange={(e)=>setKelurahan(e.target.value)}
                                value={kelurahan}
                              />
                            </Col>
                            <Col md="2"></Col>
                            <Col md="4">
                              <label htmlFor="feInputKecamatan">Kecamatan</label>
                              <FormInput
                                id="feInputKecamatan"
                                placeholder="Kecamatan"
                                onChange={(e)=>setKecamatan(e.target.value)}
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
                                onChange={(e)=>setKota(e.target.value)}
                                value={kota}
                              />
                            </Col>
                            <Col md="2"></Col>
                            <Col md="4">
                              <label htmlFor="feInputKodePos">Kode Pos</label>
                              <FormInput
                                id="feInputKodePos"
                                placeholder="Kode Pos"
                                onChange={(e)=>setKodePos(e.target.value)}
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
                                onChange={(e)=>setNoTelp(e.target.value)}
                                value={no_telp}
                              />
                            </Col>
                            <Col md="2"></Col>
                            <Col md="4">
                              <label htmlFor="feEmailAddress">Email</label>
                              <FormInput
                                id="feEmailAddress"
                                type="email"
                                placeholder="Email"
                                onChange={(e)=>setEmail(e.target.value)}
                                value={email}
                              />
                            </Col>
                          </Row>

                          <Row form>
                            <Col md="2" className="form-group">
                              <label htmlFor="feInputJabatan">Posisi</label>
                              <FormSelect onClick={onChangeHandlerPosition}>
                              {
                                list_position.map((item)=>
                                    <option value={item.id}>{item.nama_posisi}</option>
                                  )
                              }
                              </FormSelect>
                            </Col>
                            <Col md="4"></Col>
                            <Col md="6">
                              <Row>
                                <Col sm="6">
                                  <label htmlFor="feLokasi">Provinsi</label>
                                  <FormSelect onClick={onChangeHandlerProvinsi}>
                                  {
                                    list_provinsi.map((item)=>
                                        <option value={item.id}>{item.nama_provinsi}</option>
                                      )
                                  }
                                  </FormSelect>
                                </Col>
                                <Col sm="6">
                                  <label htmlFor="feLokasi">Daerah</label>
                                  <FormSelect onClick={onChangeHandlerDaerah}>
                                  {
                                    list_daerah.map((item)=>
                                    <option value={item.id}>{item.nama_daerah}</option>
                                    )
                                  }
                                  </FormSelect>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                          <Row className="d-flex">
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
  );
  
}

export default FormAddAdmin;
