import "./index.styl";

import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router";
import { translate } from "react-i18next";
import { map, throttle } from "lodash";
import { compose, setDisplayName } from "recompose";

//
// Components
import LanguageSelector from "app-components/language_selector";

const MENU_ITEMS = [
  "catraio", "shopandbar", "events", "photos"
];

export class Header extends Component {

  state = {
    active: null
  };

  constructor(props) {
    super(props);
    this.handleScroll = throttle(this.handleScroll.bind(this), 100);
  }

  linkClicked(item) {
    const element = document.getElementById(item);
    element.scrollIntoView({ behavior: "smooth" });
    this.setState({ active: item });
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll.bind(this));
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll.bind(this));
  // }

  getTopOfElement(elem) {
    // where element is in viewport
    let box = elem.getBoundingClientRect();

    const body = document.body;
    const docElem = document.documentElement;

    // Current position in page
    let scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;

    // Possible IE shifting
    let clientTop = docElem.clientTop || body.clientTop || 0;

    // (4)
    let top  = box.top +  scrollTop - clientTop;

    return Math.round(top);
  }

  handleScroll() {
    const positions = {
      catraio: this.getTopOfElement(document.querySelector("#catraio")),
      shopandbar: this.getTopOfElement(document.querySelector("#shopandbar")),
      events: this.getTopOfElement(document.querySelector("#events")),
      photos: this.getTopOfElement(document.querySelector("#photos"))
    }

    const body = document.body
    const docElem = document.documentElement
    let scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop

    if (scrollTop > positions.photos) {
      this.setState({ active: "photos" });
    } else if (scrollTop > positions.events) {
      this.setState({ active: "events" });
    } else if (scrollTop > positions.shopandbar) {
      this.setState({ active: "shopandbar" });
    } else if (scrollTop > positions.catraio) {
      this.setState({ active: "catraio" });
    } else {
      this.setState({ active: null });
    }
  }

  render() {
    const { t } = this.props;
    const { active } = this.state;

    return (
      <header className="Header">

        <Link className="logo" to="/">
          <h1>Catraio</h1>
        </Link>

        <ul className="Header-menu">
          {map(MENU_ITEMS, (item) => {
            const cx = classnames("Header-menu-item", { active: active === item });

            return (
              <li
                key={`header-link-${item}`}
                className={cx}
                onClick={this.linkClicked.bind(this, item)}
              >
                {t(`menu:${item}`)}
              </li>
            );
          })}
        </ul>

        <LanguageSelector />

      </header>
    );
  }
}

export default compose(
  setDisplayName("Header"),

  translate([ "menu" ]),
)(Header);
