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
  Button
} from "shards-react";
import verifikasi2 from "../../views/Verifikasi2";

const MemberAccountDetails = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
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
                      value="Laki-laki"
                    />
                  </Col>
                  <Col md="6" className="form-group">
                  <label htmlFor="feTempatTanggalLahir">Tempat, Tanggal Lahir</label>
                    <FormInput
                      id="feTempatTanggalLahir"
                      value="Surabaya, 08 Agustus 1995"
                    />
                  </Col>
                </Row>
                <Row form>
                  <Col md="12" className="form-group">
                  <label htmlFor="feAlamat">Alamat</label>
                    <FormInput
                      id="feAlamat"
                      value="Bumi Galaxy Permai, Surabaya."
                    />
                  </Col>
                </Row>
                <Row form>
                  <Col md="6" className="form-group">
                  <label htmlFor="feRegion">Region</label>
                    <FormInput
                      id="feRegion"
                      value="Surabaya" />
                  </Col>
                  <Col md="6" className="form-group">
                  <label htmlFor="feProvinsi">Provinsi</label>
                    <FormInput
                      id="feProvinsi"
                      value="Jawa Timur" />
                  </Col>
                </Row>
                <Row form>
                  <Col md="6" className="form-group">
                  <label htmlFor="feNoTelp">No Telp</label>
                    <FormInput
                      id="feNoTelp"
                      value="08123456789" />
                  </Col>
                  <Col md="6" className="form-group">
                  <label htmlFor="feSekolahUniv">Sekolah/Universitas</label>
                    <FormInput
                      id="feSekolahUniv"
                      value="-" />
                  </Col>
                </Row>
                <Row form>
                  <Col md="6" className="form-group">
                  <label htmlFor="feHobby">Hobby</label>
                    <FormInput
                      id="feHobby"
                      value="Bersepeda, Mendaki" />
                  </Col>
                  <Col md="6" className="form-group">
                  <label htmlFor="feUkuranBaju">Ukuran Baju</label>
                    <FormInput
                      id="feUkuranBaju"
                      value="XL" />
                  </Col>
                </Row>
                <Row className="d-flex">
                  <Col align="right">
                    <Button href="verifikasi2">Next</Button>
                  </Col>
                </Row>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

MemberAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

MemberAccountDetails.defaultProps = {
  title: "Account Details"
};

export default MemberAccountDetails;
