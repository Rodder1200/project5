import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router";
// import Header from "../components/header/header";
// import FooterSmart from "../components/footer/footerSmart";
// import PageSwitcher from "../components/pageSwitcher/pageSwitcher";
// import Page01 from "../components/page01/page01";
// import Page03 from "../components/page03/page03";
// import Page04Smart from "../components/page04/page04Smart";
// import Page05ask from "../components/page05/page05ask";
// import Page05tellMore from "../components/page05/page05tellMore";
// import Page05closing from "../components/page05/page05closing";
// import PageProcess from "../components/pageProcess/pageProcess";
// import Page07 from "../components/page07/page07";
// import Page08 from "../components/page08/page08";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
