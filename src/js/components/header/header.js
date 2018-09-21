import React, { Component } from "react";
import Nav from "../nav/nav";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="header">
          <div className="container">
            <div className="logo">
              <div className="logo__title">COlliDER</div>
              <img src="" alt="" className="logo__img" />
            </div>
            <Nav />
            <div className="search">
              <i className="fa fa-search" />
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
