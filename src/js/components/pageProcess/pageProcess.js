import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageProcess extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="page page__center" id="page-process">
          <div className="process-header">PROCESS</div>
          <ul className="process-main">
            <li className="process-item">
              <div className="process-item__num">
                0<span>1</span>{" "}
              </div>
              <div className="process-item__img">
                <i className="icon fa fa-id-card-o"> </i>
              </div>
              <div className="process-item__title">Flyer Delivered </div>
            </li>
            <li className="process-item">
              <div className="process-item__title">Confis Signed</div>
              <div className="process-item__img">
                <i className="icon fa fa-id-card-o" />
              </div>
              <div className="process-item__num">
                0<span>2</span>{" "}
              </div>
            </li>
            <li className="process-item">
              <div className="process-item__num">
                0<span>3</span>{" "}
              </div>
              <div className="process-item__img">
                <i className="icon fa fa-id-card-o" />
              </div>
              <div className="process-item__title">Tours Scheduled </div>
            </li>
            <li className="process-item">
              <div className="process-item__title">Offers Received</div>
              <div className="process-item__img">
                <i className="icon fa fa-id-card-o" />
              </div>
              <div className="process-item__num">
                0<span>4</span>{" "}
              </div>
            </li>
            <li className="process-item">
              <div className="process-item__num">
                0<span>5</span>
              </div>
              <div className="process-item__img">
                <i className="icon fa fa-id-card-o" />
              </div>
              <div className="process-item__title">Top offers selected </div>
            </li>
            <li className="process-item">
              <div className="process-item__title">Counter offer submited</div>
              <div className="process-item__img">
                <i className="icon fa fa-id-card-o"> </i>
              </div>
              <div className="process-item__num">
                0<span>6</span>{" "}
              </div>
            </li>
            <li className="process-item">
              <div className="process-item__num">
                0<span>7</span>{" "}
              </div>
              <div className="process-item__img">
                <i className="icon fa fa-id-card-o" />
              </div>
              <div className="process-item__title">Offer Accepted</div>
            </li>
          </ul>
          <div className="process-footer">
            <div className="question">Set Bid Deadline?</div>
            <div className="btn-group">
              <Link to="/page05closing">
                <button className="btn">Yes</button>
              </Link>
              <Link to="/page07">
                <button className="btn">No</button>
              </Link>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PageProcess;
