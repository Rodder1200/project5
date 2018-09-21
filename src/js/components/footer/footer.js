import React, { Component } from "react";
import NextPage from "../nextPage";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <div className="container">
            <div className="social">
              <a href="https://facebook.com" target="_blank">
                <i className="icon fa fa-facebook" aria-hidden="true">
                  <span className="visually-hidden">facebook.com</span>
                </i>
              </a>
              <a href="https://twitter.com" target="_blank">
                <i className="icon fa fa-twitter" aria-hidden="true">
                  <span className="visually-hidden">twitter.com</span>
                </i>
              </a>
              <a href="https://plus.google.com" target="_blank">
                <i className="icon fa fa-google-plus" aria-hidden="true">
                  <span className="visually-hidden">plus.google.com</span>
                </i>
              </a>
              <a href="https://linkedin.com" target="_blank">
                <i className="icon fa fa-linkedin" aria-hidden="true">
                  <span className="visually-hidden">linkedin.com</span>
                </i>
              </a>
            </div>
            <div className="nextPage" onClick={NextPage}>
              <a href="javascript:void(0);" target="_blank">
                <i className="icon fa fa-angle-down" aria-hidden="true">
                  <span className="visually-hidden">angle-down</span>
                </i>
              </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
