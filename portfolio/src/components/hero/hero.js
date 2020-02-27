import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "./hero.css"

class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Jumbotron className=" jumbotron-fluid p-0">
        <Container fluid={true}>
          <Row className="justify-content-center">
            <Col md={8} sm={12} className="p-5">
              {this.props.title && (
                <h1 className="display-4  font-weight-bolder"  >
                  {this.props.title}
                </h1>
              )}
              {this.props.subTitle && (
                <h3 className="display-4 font-weight-light" >
                  {this.props.subTitle}
                </h3>
              )}
              {this.props.text && (
                <h3 className="lead font-weight-light" >{this.props.text}</h3>
              )}
            </Col>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="10.png" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="11.png" alt="Third slide"  />
                <Carousel.Caption >
                <h3>  <a  style={{ textDecoration: "none"}} target="_blank" href="https://drive.google.com/file/d/1qn2DNuSdDEnz8xjR3HpNOVLKi0Y3AG_7/view?usp=sharing">My CI/CD Project</a></h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="12.png" alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Hero;
