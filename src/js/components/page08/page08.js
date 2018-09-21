import React, { Component } from "react";

class Page08 extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="page page__center" id="page08">
          <div className="report-title">PROPERTY SALE STATUS REPORT</div>
          <div className="report-items">
            <div className="report-item">
              <h2 className="report-item__num">
                45
                <span>755</span>
              </h2>
              <div className="report-item__text">
                Property Sale <br /> Status Report
              </div>
            </div>
            <div className="report-item">
              <h2 className="report-item__num">
                5<span>755</span>
              </h2>
              <div className="report-item__text">
                Signed Confi for the <br /> property &amp; received info
              </div>
            </div>
            <div className="report-item">
              <h2 className="report-item__num">
                2<span>745</span>
              </h2>
              <div className="report-item__text">
                Have expressed <br /> interested to tour
              </div>
            </div>
            <div className="report-item">
              <h2 className="report-item__num">
                5<span>755</span>
              </h2>
              <div className="report-item__text">
                Submitted <br /> offers
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Page08;
