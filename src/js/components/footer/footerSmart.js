import React, { Component } from "react";
import Footer from "../footer/footer";

class FooterSmart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeight: 0
    };
  }

  render() {
    return (
      <React.Fragment>
        <Footer />
      </React.Fragment>
    );
  }
}

export default FooterSmart;
