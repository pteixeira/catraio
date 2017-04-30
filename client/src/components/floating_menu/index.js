import "./index.styl";

import React, { PropTypes, Component } from "react"
import classnames from "classnames";
import { map, throttle } from "lodash";
import { translate } from "react-i18next";
import { compose, setDisplayName, setPropTypes } from "recompose";

const MENU_ITEMS = [
  "catraio", "shopandbar", "events", "photos"
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
    const { visible } = this.state;

    if (scrollTop > threshold && !visible) {
      this.setState({ visible: true });
    } else if (scrollTop < threshold && visible) {
      this.setState({ visible: false })
    }
  }, 100);

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
          const cx = classnames("FloatingMenuItem", { active: active === item });

          return (
            <li
              key={`floating-menu-${item}`}
              className={cx}
              onClick={() => {}}
            >
              {t(`menu:${item}`)}
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
