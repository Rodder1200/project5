import React from "react";
import { Switch, Route } from "react-router-dom";
import PageSwitcher from "../components/pageSwitcher/pageSwitcherSmart";
import Header from "../components/header/header";
import Footer from "../components/footer/footerSmart";
import Page01 from "../components/page01/page01";
import Page03 from "../components/page03/page03";
import Page04 from "../components/page04/page04";
import Page05ask from "../components/page05/page05ask";
import Page05closing from "../components/page05/page05closing";
import Page05tellMore from "../components/page05/page05tellMore";
import PageProcess from "../components/pageProcess/pageProcess";
import Page07 from "../components/page07/page07";
import Page08 from "../components/page08/page08";

const Router = () => (
  <React.Fragment>
    <Route path="/" component={Page01} />
    <Route path="/" component={Page03} />
    <Route path="/" component={Header} />
    <Route path="/" component={Footer} />
    <Route path="/" component={PageSwitcher} />
    <Route path="/" component={Page04} />
    <Switch>
      <Route exact path="/page05ask" component={Page05ask} /> */}
      <Route exact path="/page05closing" component={Page05closing} /> */}
      <Route exact path="/page05tellMore" component={Page05tellMore} /> */}
      <Route exact path="/pageProcess" component={PageProcess} /> */}
      <Route exact path="/page07" component={Page07} /> */}
    </Switch>
    <Route path="/" component={Page08} />
  </React.Fragment>
);

export default Router;
