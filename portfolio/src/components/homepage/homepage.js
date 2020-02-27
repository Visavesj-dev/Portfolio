import React, { Component } from "react";
import Hero from "../hero/hero";
import Carousel from "../carousel/carousel";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: {
        title: "Seeing Failure As An Opportunity",
        subTitle: "Projects the make a difference",
        text: "Checkout my projects below"
      }
    };
  }

  render() {
    return (
      <div>
        <Hero
          title={this.state.home.title}
          subTitle={this.state.home.subTitle}
          text={this.state.home.text}
        />
        <Carousel />
      </div>
    );
  }
}
