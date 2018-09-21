import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="nav">
          <ul>
            <li className="nav__item">
              <a href="#page01" className="nav__link">
                HOME
              </a>
            </li>
            <li className="nav__item">
              <a href="$$" className="nav__link">
                ABOUT US
              </a>
            </li>
            <li className="nav__item">
              <a href="$$" className="nav__link">
                NEWS
              </a>
            </li>
            <li className="nav__item">
              <a href="$$" className="nav__link">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Nav;
