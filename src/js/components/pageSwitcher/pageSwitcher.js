import React, { Component } from "react";

class PageSwitcher extends Component {
  render() {
    return (
      <React.Fragment>
        <aside className="pageSwitcher">
          <ul>
            <a href={"#page0" + this.props.page1}>
              <li className="switchedPage">
                <span> 0{this.props.page1}</span>
              </li>
            </a>
            <a href={"#page0" + this.props.page2}>
              <li className="switchedPage">
                <span> 0{this.props.page2}</span>
              </li>
            </a>
            <a href={"#page0" + this.props.page3}>
              <li className="switchedPage">
                <span> 0{this.props.page3}</span>
              </li>
            </a>
            <a href={"#page0" + this.props.currentPage}>
              <li className="switchedPage switchedPage__active">
                <span> 0{this.props.currentPage}</span>
              </li>
            </a>
            <a href={"#page0" + this.props.page4}>
              <li className="switchedPage">
                <span> 0{this.props.page4}</span>
              </li>
            </a>
            <a href={"#page0" + this.props.page5}>
              <li className="switchedPage">
                <span> 0{this.props.page5}</span>
              </li>
            </a>
            <a href={"#page0" + this.props.page6}>
              <li className="switchedPage">
                <span> 0{this.props.page6}</span>
              </li>
            </a>
          </ul>
        </aside>
      </React.Fragment>
    );
  }
}

export default PageSwitcher;
