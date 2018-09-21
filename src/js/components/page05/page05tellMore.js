import React, { Component } from "react";
import { Link } from "react-router-dom";

class Page05tellMore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    if (timerid) {
      clearTimeout(timerid);
    }

    const timerid = setTimeout(() => {
      alert("Your message was successfully sent!");
    }, 1000);
  }
  render() {
    return (
      <React.Fragment>
        <section className="page page__center" id="page05tellMore">
          <h3 className="tellMore-title">
            TELL US MORE ABOUT YOUR ACQUISTION CRITERIA
          </h3>
          <form className="form-tellMore" action="javascript:void(0);">
            <label>
              Neighborhood <br />
              <input name="neighborhood" type="text" />
            </label>
            <label>
              Property Type <br />
              <input name="propertyType" type="text" />
            </label>
            <label>
              Minimal Cap Rate <br />
              <input name="minCapRate" type="text" />
            </label>
            <label>
              Deal Volume <br />
              <div className="container">
                <input
                  className="halfinput"
                  name="minVolume"
                  type="text"
                  placeholder="Min"
                />
                <input
                  className="halfinput"
                  name="maxVolume"
                  type="text"
                  placeholder="Max"
                />
              </div>
            </label>
            <div className="container">
              <Link to="/pageProcess">
                <button className="btn" type="submit" onClick={this.onSubmit}>
                  Send
                </button>
              </Link>
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default Page05tellMore;
