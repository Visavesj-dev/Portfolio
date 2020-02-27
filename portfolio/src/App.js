import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Typist from "react-typist";

//bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//import Component
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/homepage";
import Aboutpage from "./components/aboutpage/aboutpage";
import ContactPage from "./components/contactpage/contactpage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Garrett Love",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Be Relentless",
        subTitle: "Projects the make a difference",
        text: "Checkout my projects below"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Let's Talk"
      }
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar bg="dark" expand="lg">
            <Typist>
              <Navbar.Brand className="text-white">
                <img
                  alt=""
                  src="/4.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top mr-2"
                />{" "}
                Welcome To My Portfolio
              </Navbar.Brand>
            </Typist>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              {/* ml = margin-left */}
              <Nav className="ml-auto">
                <Link className="nav-link text-white mr-5" to="/">
                  Home
                </Link>
                <Link className="nav-link text-white mr-5" to="/about">
                  About
                </Link>
                <Link className="nav-link text-white " to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={Aboutpage} />
          <Route path="/contact" component={ContactPage} />

          <Footer />
        </Container>
      </Router>
    );
  }
}
