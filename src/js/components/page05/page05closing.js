import React, { Component } from "react";

class Page05closing extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="page" id="page05closing">
          <div className="steps">
            <div className="step">
              <div className="step__num" />
              <div className="step__title">Tour &amp; Offer</div>
              <ul className="step__list">
                <li className="step__item">Schedule Tour</li>
                <li className="step__item">Make Offer </li>
                <li className="step__item">COR </li>
                <li className="step__item">OA </li>
              </ul>
            </div>
            <div className="step">
              <div className="step__num" />
              <div className="step__title">3d Party Providers for Buyers</div>
              <ul className="step__list">
                <li className="step__item">Broker Collider</li>
                <li className="step__item">Choose Lender </li>
                <li className="step__item">OTS </li>
                <li className="step__item">CI</li>
              </ul>
            </div>
            <div className="step">
              <div className="step__num" />
              <div className="step__title">Contract</div>
              <ul className="step__list">
                <li className="step__item">Contract Issued</li>
                <li className="step__item">CC </li>
                <li className="step__item">Contract Ready </li>
                <li className="step__item">Contract Signed</li>
              </ul>
            </div>
            <div className="step">
              <div className="step__num" />
              <div className="step__title">Closing</div>
              <ul className="step__list">
                <li className="step__item">
                  <div className="calendar" />
                </li>
                <li className="step__item"> </li>
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Page05closing;
