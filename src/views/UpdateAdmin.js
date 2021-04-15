import React from "react";
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
import allAdmin from "./AllAdmin";

const UpdateAdmin = () => (
  <div>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
      </Row>
      <Row>
        <Col lg="12" className="mb-4">
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0"></h6>
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
                          value="yyy"
                          placeholder="Nama"
                        />
                      </FormGroup>

                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feJenisKelamin">Jenis Kelamin</label>
                          <Row>
                            <Col sm="3">
                              <FormRadio id="feJenisKelaminLaki-Laki">Laki-Laki</FormRadio>
                            </Col>
                            <Col>
                              <FormRadio id="feJenisKelaminPerempuan">Perempuan</FormRadio>
                            </Col>
                          </Row>
                        </Col>
                        <Col md="3">
                          <label htmlFor="feAgama">Agama</label>
                          <FormSelect id="feAgama">
                            <option>Islam</option>
                            <option>Kristen Protestan</option>
                            <option>Kristen Katolik</option>
                            <option>Hindu</option>
                            <option>Budha</option>
                            <option>Konghucu</option>
                          </FormSelect>
                        </Col>
                      </Row>

                      <Row form>
                        <Col md="4" className="form-group">
                          <label htmlFor="feTempatLahir">Tempat Lahir</label>
                          <FormInput
                            id="feTempatLahir"
                            value=""
                            placeholder="Tempat Lahir"
                          />
                        </Col>
                        <Col md="2"></Col>
                        <Col md="6">
                          <label htmlFor="feTanggalLahir">Tanggal Lahir</label>
                          <Row>
                            <Col sm="2">
                              <FormSelect id="feTanggalLahir">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                              </FormSelect>
                            </Col>
                            <Col sm="3">
                              <FormSelect id="feTanggalLahir">
                                <option>Januari</option>
                                <option>Februari</option>
                                <option>Maret</option>
                                <option>April</option>
                                <option>Mei</option>
                                <option>Juni</option>
                                <option>Juli</option>
                                <option>Agustus</option>
                                <option>September</option>
                                <option>Oktober</option>
                                <option>November</option>
                                <option>Desember</option>
                              </FormSelect>
                            </Col>
                            <Col sm="4">
                              <FormInput
                                value=""
                                placeholder="Tahun" />
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      <FormGroup>
                        <label htmlFor="feInputAlamat">Alamat</label>
                        <FormInput
                          id="feInputAlamat"
                          value=""
                          placeholder="Alamat"
                        />
                      </FormGroup>

                      <Row form>
                        <Col md="4" className="form-group">
                          <label htmlFor="feInputKelurahan">Kelurahan</label>
                          <FormInput
                            id="feInputKelurahan"
                            placeholder="Kelurahan"
                          />
                        </Col>
                        <Col md="2"></Col>
                        <Col md="4">
                          <label htmlFor="feInputKecamatan">Kecamatan</label>
                          <FormInput
                            id="feInputKecamatan"
                            value=""
                            placeholder="Kecamatan"
                          />
                        </Col>
                      </Row>

                      <Row form>
                        <Col md="4" className="form-group">
                          <label htmlFor="feInputKota">Kota</label>
                          <FormInput
                            id="feInputKota"
                            value=""
                            placeholder="Kota"
                          />
                        </Col>
                        <Col md="2"></Col>
                        <Col md="4">
                          <label htmlFor="feInputKodePos">Kode Pos</label>
                          <FormInput
                            id="feInputKodePos"
                            value=""
                            placeholder="Kode Pos"
                          />
                        </Col>
                      </Row>

                      <Row form>
                        <Col md="4" className="form-group">
                          <label htmlFor="feInputNoTelp">No Telp</label>
                          <FormInput
                            id="feInputNoTelp"
                            value=""
                            placeholder="No Telp"
                          />
                        </Col>
                        <Col md="2"></Col>
                        <Col md="4">
                          <label htmlFor="feEmailAddress">Email</label>
                          <FormInput
                            id="feEmailAddress"
                            value=""
                            type="email"
                            placeholder="Email"
                          />
                        </Col>
                      </Row>

                      <Row form>
                        <Col md="2" className="form-group">
                          <label htmlFor="feInputJabatan">Jabatan</label>
                          <FormSelect id="feInputJabatan">
                            <option>Admin Daerah</option>
                            <option>Admin Provinsi</option>
                            <option>Admin Nasional</option>
                          </FormSelect>
                        </Col>
                        <Col md="4"></Col>
                        <Col md="6">
                          <Row>
                            <Col sm="6">
                              <label htmlFor="feLokasi">Provinsi</label>
                              <FormSelect id="feLokasi">
                                <option>Jawa Timur</option>
                                <option>Jawa Tengah</option>
                                <option>Jawa Barat</option>
                              </FormSelect>
                            </Col>
                            <Col sm="6">
                              <label htmlFor="feLokasi">Daerah</label>
                              <FormSelect id="feLokasi">
                                <option>Surabaya</option>
                                <option>Jember</option>
                                <option>Bandung</option>
                              </FormSelect>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="d-flex">
                        <Col align="right">
                          <Button size="md" type="submit" href="allAdmin">Submit</Button>
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

export default UpdateAdmin;
