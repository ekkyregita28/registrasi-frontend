/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from "shards-react";

import LoginForm from "../components/components-overview/LoginForm";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      PostsListTwo: [
        {
          backgroundImage: require("../images/content-management/login.jpeg"),
        }
      ]
    };
  }

  render() {
    const {
      PostsListTwo
    } = this.state;
    return (
      <Container>
        <Row>
          {PostsListTwo.map((post, idx) => (
            <Col lg="6" sm="12" className="mb-4 mx-auto mt-5" key={idx}>
              <Card small className="card-post--aside">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                >
                </div>
                <CardBody>  
                    <LoginForm/>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Login;
