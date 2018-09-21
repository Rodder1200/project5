import React, { Component } from "react";
import { Link } from "react-router-dom";

class Page05ask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      comments: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.attach = this.attach.bind(this);
  }

  onChangePrice(e) {
    this.setState({ price: e.target.value });
    console.log(this.state.price);
  }

  onChangeComments(e) {
    this.setState({ comments: e.target.value });
    console.log(this.state.comments);
  }

  attach() {
    console.log("attach file");
  }

  onSubmit(e) {
    console.log(this.state.price);
    console.log(this.state.comments);
    if (timerid) {
      clearTimeout(timerid);
    }

    const timerid = setTimeout(() => {
      alert("Your message was successfully sent!");
      // location.replace("/");
    }, 1000);
  }

  render() {
    return (
      <React.Fragment>
        <section className="page page__center" id="page05ask">
          <form className="form-ask" action="javascript:void(0);" method="post">
            <label>
              Asking Price <br />
              <input
                name="asking_price"
                type="text"
                onBlur={this.onChangePrice}
              />
            </label>
            <button className="attach" onClick={this.attach}>
              📎 Attach Rent Roll &amp; Expenses
            </button>
            <label>
              Comments <br />
              <textarea onBlur={this.onChangeComments} />
            </label>
            <Link to="/page07">
              <button className="btn" type="submit" onClick={this.onSubmit}>
                Submit
              </button>
            </Link>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default Page05ask;
