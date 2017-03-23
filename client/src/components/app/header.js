import "./header.styl";

import React from "react";
import { Link } from "react-router";
import { translate } from "react-i18next";
import { map, throttle } from "lodash";

import LoginForm from "app-components/login";
import LanguageSelector from "app-components/language_selector";

const MENU_ITEMS = [
  "catraio", "shopandbar", "events", "photos"
];

class Header extends React.Component {
  static displayName = "Header";
  constructor(props) {
    super(props);
    this.handleScroll = throttle(this.handleScroll, 100);
  }

  state = {
    sectionSelected: null
  };

  linkClicked(item) {
    const element = document.getElementById(item);
    element.scrollIntoView({ behavior: "smooth" });
    this.setState({ sectionSelected: item });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

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
      this.setState({ sectionSelected: "photos" });
    } else if (scrollTop > positions.events) {
      this.setState({ sectionSelected: "events" });
    } else if (scrollTop > positions.shopandbar) {
      this.setState({ sectionSelected: "shopandbar" });
    } else if (scrollTop > positions.catraio) {
      this.setState({ sectionSelected: "catraio" });
    } else {
      this.setState({ sectionSelected: null });
    }
  }

  render() {
    const { t } = this.props;

    return (
      <header className="Header">

        <Link className="logo" to="/">
          <h1>Catraio</h1>
        </Link>

        <ul className="Header-menu">
          {map(MENU_ITEMS, (item) => {
            let itemCx = this.state.sectionSelected === item ? "Header-menu-item active" : "Header-menu-item";
            return (
              <li className={itemCx} key={`header-link-${item}`} onClick={this.linkClicked.bind(this, item)}>
                {t(`menu:${item}`)}
              </li>
            );
          })}
        </ul>

        <LoginForm />

        <LanguageSelector />

      </header>
    );
  }
}

export default translate(["menu"])(Header);
