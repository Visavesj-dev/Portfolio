import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";

class Aboutpage extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
          <Container fluid={true}>
            <Row className="justify-content-center py-5">
              <Col md={8} sm={12}>
                <h1 className="display-1 font-weight-bolder">About Me</h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container fluid={true}>
          <Row className="justify-content-center  pb-auto">
            <Col md={8}>
              <p>
                Hello, my name is Visavesj Chiangsan. I'm a 4th year student of
                the Faculty of Engineering Chiang Mai University.
              </p>

              <p>
                My dream is to be software engineering and become a senior (
                I'll graduate in 2021 ).
              </p>

              <p>
                I'm constantly learning new things. currently those things
                include gaining more experience with MongoDB, React, Express JS,
                and Node JS (I focus on React JS)
              </p>

              <p>
                My latest project, FaceRecognition, It is built with React JS, SQL
                Server, Express JS, and Node JS. My Project connects with Python
                to detect the data.
              </p>

              <h3>My Achievements</h3>
              <p>
                Developed a full-stack web application ( Angular.JS + Node.Js +
                MongoDB ) "POS System", using Angular that allows users to
                explore various aspects of the store web application and
                information of store is stored on a back-end created using
                Node.JS and MongoDB.
              </p>

              <p>
                Developed test automation and CI/CD project ( Gitlab + Jenkins +
                Docker + Kubernetes ), Deploying to Kubernetes with Jenkins.
              </p>


              <p>
                Developed a full-stack web application ( Laravel + Mysql + Docker ) 
                Reserch information system for department of engineering. 
              </p>



              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Aboutpage;
