import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component {
  render() {
    return (
      <footer className="mt-5">
        <Container fluid={true}>
          <Row className="border-top justify-content-between p-3">
          {/* md = col-md , sm = col-sm  */}
            <Col className="p-0" md={3} sm={12}>
             Visavesj Chiangsan
            </Col>
            <Col className="p-0 d-flex justify-content-end" md={3}>
              HelloWolrd!!
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
