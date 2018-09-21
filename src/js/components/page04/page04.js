import React, { Component } from "react";
import { Link } from "react-router-dom";
import NextPage from "../nextPage";

class Page04 extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="page" id="page04">
          <div className="half-screen">
            <div className="text-block">
              <div className="container">
                <h3 className="text-block__title">
                  BASED ON <br /> PROVIDED
                </h3>
                <div className="text-block__text">
                  info your property is worth in the{" "}
                </div>
                <div className="text-block__text text-block__text_special">
                  $5 - 6.2M range
                </div>
                <div className="text-block__text">
                  carefully crafted artifical
                </div>
                <div className="text-block__text">intelligence algoritms</div>
              </div>
            </div>
          </div>
          <div className="half-screen">
            <div className="btn-group">
              <Link to="/page05tellMore">
                <button className="btn" onClick={NextPage}>
                  Comparables
                </button>
              </Link>
              <Link to="/page05ask">
                <button className="btn" onClick={NextPage}>
                  Sell with us?
                </button>
              </Link>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Page04;
