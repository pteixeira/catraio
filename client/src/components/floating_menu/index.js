import "./index.styl";

import React, { PropTypes, Component } from "react"
import classnames from "classnames";
import { map, throttle, findLast } from "lodash";
import { translate } from "react-i18next";
import { compose, setDisplayName, setPropTypes } from "recompose";

const MENU_ITEMS = [
  "catraio",
  "photos",
  "shopandbar",
  "events",
];

export class FloatingMenu extends Component {
  state = {
    active: "catraio",
    visible: false,
  }

  //----------------------------------------------------------------------------
  // Lifecycle
  //----------------------------------------------------------------------------
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  //----------------------------------------------------------------------------
  // Helpers
  //----------------------------------------------------------------------------
  handleScroll = throttle((ev) => {
    const { scrollTop } = ev.target.scrollingElement;
    const { threshold } = this.props;
    const { visible, active } = this.state;

    if (scrollTop > threshold && !visible) {
      this.setState({ visible: true });
    } else if (scrollTop < threshold && visible) {
      this.setState({ visible: false })
    }

    const sections = document.getElementsByClassName("SectionMarker");
    const current = findLast(sections, s => scrollTop > s.offsetTop);

    const id = current && current.id || "catraio";

    if (active !== id) {
      this.setState({ active: id });
    }
  }, 100);

  scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView();
  }

  //----------------------------------------------------------------------------
  // Render
  //----------------------------------------------------------------------------
  render() {
    const { t } = this.props;
    const { active, visible } = this.state;

    const cx = classnames("FloatingMenu", { visible });

    return (
      <ul className={cx}>
        {map(MENU_ITEMS, item => {
          const cx = classnames("FloatingMenuItem", item, { active: active === item });

          return (
            <li
              key={`floating-menu-${item}`}
              className={cx}
              onClick={() => this.scrollToSection(item)}
            >
              <span className="desktop">{t(`menu:${item}`)}</span>
              <span className="mobile">{t(`mobile_menu:${item}`)}</span>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default compose(
  setDisplayName("FloatingMenu"),

  setPropTypes({
    threshold: PropTypes.number.isRequired,
  }),

  translate([[ "menu" ]]),
)(FloatingMenu);
