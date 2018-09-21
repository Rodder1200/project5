import React, { Component } from "react";
import PageSwitcher from "../pageSwitcher/pageSwitcher";

class PageSwitcherSmart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page1: 6,
      page2: 7,
      page3: 8,
      currentPage: 1,
      page4: 2,
      page5: 3,
      page6: 4
    };
  }

  componentWillMount() {
    window.addEventListener("scroll", () => {
      const windowHeight = window.innerHeight;
      const currentPosition = window.pageYOffset;

      switch (true) {
        case currentPosition > windowHeight * 2.75:
          this.setState({ currentPage: 8 });
          this.setState({ page1: 5 });
          this.setState({ page2: 6 });
          this.setState({ page3: 7 });
          this.setState({ page4: 1 });
          this.setState({ page5: 2 });
          this.setState({ page6: 3 });
          break;
        case currentPosition > windowHeight * 1.75:
          this.setState({ currentPage: 4 });
          this.setState({ page1: 1 });
          this.setState({ page2: 2 });
          this.setState({ page3: 3 });
          this.setState({ page4: 5 });
          this.setState({ page5: 6 });
          this.setState({ page6: 7 });
          break;
        case currentPosition > windowHeight * 0.75:
          this.setState({ currentPage: 3 });
          this.setState({ page1: 8 });
          this.setState({ page2: 1 });
          this.setState({ page3: 2 });
          this.setState({ page4: 4 });
          this.setState({ page5: 5 });
          this.setState({ page6: 6 });
          break;
        default:
          this.setState({ currentPage: 1 });
          this.setState({ page1: 6 });
          this.setState({ page2: 7 });
          this.setState({ page3: 8 });
          this.setState({ page4: 2 });
          this.setState({ page5: 3 });
          this.setState({ page6: 4 });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <PageSwitcher {...this.state} />
      </React.Fragment>
    );
  }
}

export default PageSwitcherSmart;
