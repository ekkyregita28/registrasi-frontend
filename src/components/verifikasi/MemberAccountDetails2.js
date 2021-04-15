import React from "react";
import PropTypes from "prop-types";
import {
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
  Button, FormRadio
} from "shards-react";
import verifikasi from "../../views/Verifikasi";
import verifRegistrasi from "../../views/VerifikasiRegistrasi";

const MemberAccountDetails2 = ({ title }) => (
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
                      value="3578765356700000"
                    />
                  </Col>
                  <Col md="6" className="form-group">
                  <label htmlFor="feNoSIM">No SIM</label>
                    <FormInput
                      id="feNoSIM"
                      value="12345678910"
                    />
                  </Col>
                </Row>
                <Row form>
                  <Col md="6" className="form-group">
                  <label htmlFor="feScanKTP">Scan KTP</label>
                    <FormInput
                      id="feScanKTP"
                      value="ScanKTPMember1.jpg"
                    />
                  </Col>
                  <Col md="6" className="form-group">
                  <label htmlFor="feScanSIM">Scan SIM</label>
                    <FormInput
                      id="feScanSIM"
                      value="ScanSIMMember1.jpg"
                    />
                  </Col>
                </Row>
                <Row form>
                  <Col md="6" className="form-group">
                  <label htmlFor="feScanSTNK">Scan STNK</label>
                    <FormInput
                      id="feScanSTNK"
                      value="ScanSTNKMember1.jpg"
                    />
                  </Col>
                  <Col md="6" className="form-group">
                  <label htmlFor="feScanSuratPajak">Scan Surat Pajak</label>
                    <FormInput
                      id="feScanSuratPajak"
                      value="ScanSuratPajakMember1.jpg"
                    />
                  </Col>
                </Row>
                <Row form>
                  <Col md="6" className="form-group">
                  <label htmlFor="fePekerjaan">Pekerjaan</label>
                    <FormInput
                      id="fePekerjaan"
                      value="Kasir" />
                  </Col>
                  <Col md="6" className="form-group">
                  <label htmlFor="feNamaPerusahaan">Nama Perusahaan</label>
                    <FormInput
                      id="feNamaPerusahaan"
                      value="PT Ronar Indonesia" />
                  </Col>
                </Row>
                <Row form>
                  <Col md="12" className="form-group">
                  <label htmlFor="feAlamatPerusahaan">Alamat Perusahaan</label>
                    <FormInput
                      id="feAlamatPerusahaan"
                      value="Bumi Galaxy Permai, Surabaya."
                    />
                  </Col>
                </Row>
                <Row form>
                  <Col md="6" className="form-group">
                  <label htmlFor="feBookingNomor">Booking Nomor</label>
                    <FormInput
                      id="feBookingNomor"
                      value="Tidak" />
                  </Col>
                  <Col md="6" className="form-group">
                  <label htmlFor="feIdMember">ID Member</label>
                    <Row>
                      <Col>
                        <FormInput
                          id="feIdMember"
                          value="" />
                      </Col>
                      <Col>
                        <Button theme="secondary">Generate</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row form>
                  <Col md="12" className="form-group">
                    <label htmlFor="feVerifikasi">Verifikasi Data?</label>
                    <Row>
                      <Col md="1">
                        <FormRadio id="feVerifikasiYa">Ya</FormRadio>
                      </Col>
                      <Col md="2">
                        <FormRadio id="feVerifikasiTidak">Tidak</FormRadio>
                      </Col>
                      <Col md="9">
                        <FormInput
                          id="feKeterangan"
                          value="Kurang jelas scan KTP"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="d-flex">
                  <Col align="left">
                    <Button href="verifikasi">Previous</Button>
                  </Col>
                  <Col align="right">
                    <Button href="verifRegistrasi" type="submit">Submit</Button>
                  </Col>
                </Row>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

MemberAccountDetails2.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

MemberAccountDetails2.defaultProps = {
  title: "Account Details"
};

export default MemberAccountDetails2;
