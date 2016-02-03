import "./beers.styl";

import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { translate } from "react-i18next/lib";
import { map, throttle, orderBy } from "lodash";
import classnames from "classnames";
import "exports?self.fetch!whatwg-fetch";

class BeerList extends React.Component {
  static displayName = "BeerList";

  static propTypes = {
    beers: React.PropTypes.array.isRequired
  };

  static defaultProps = {
    "beers": []
  };

  constructor(props) {
    super(props);

    this.throttledBoundHandleScroll = throttle(this.handleScroll.bind(this), 200);

    this.state = {
      isHeaderSticky: false,
      category: "brand",
      order: "asc"
    }
  };

  // Where the table header is, to calculate when we sticky it.
  // Used in componentDidMount()
  initialHeaderPosition = null;
  componentDidMount() {
    this.initialHeaderPosition = ReactDOM.findDOMNode(this.refs.headers).getBoundingClientRect().top;
    window.addEventListener("scroll", this.throttledBoundHandleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.throttledBoundHandleScroll);
  }

  handleScroll() {
    // If we passed the headers height, we only change if the header is not sticky.
    // Same goes for when we scroll up, we only change if the header is sticky
    if (window.scrollY < this.initialHeaderPosition) {
      if (this.state.isHeaderSticky) {
        this.setState({ isHeaderSticky: false });
      }
    } else if (!this.state.isHeaderSticky) {
      this.setState({ isHeaderSticky: true });
    }
  }

  // Filter handling
  orderAsc(cat) {
    if (cat === this.state.category && this.state.order === "asc") {
      return;
    }
    this.setState({ category: cat, order: "asc" });
  }

  orderDesc(cat) {
    if (cat === this.state.category && this.state.order === "desc") {
      return;
    }
    this.setState({ category: cat, order: "desc" });
  }

  sortedBeers() {
    return orderBy(this.props.beers, this.state.category, this.state.order);
  }

  render() {
    const headerCx = classnames({
      "sticky": this.state.isHeaderSticky === true
    });

    const smallFieldCx = classnames({
      "BeerList-smallfield": !this.state.isHeaderSticky
    })

    const { t } = this.props;

    return (
      <div className="BeerList">
        <table>
          <tbody>
            <tr ref="headers" className={headerCx}>
              <th>
                {t("beers:brand")}
                <div className="BeerList-filters">
                  <span className="BeerList-orderAsc" onClick={this.orderAsc.bind(this, "brand")}>^</span>
                  <span className="BeerList-orderDesc" onClick={this.orderDesc.bind(this, "brand")}>V</span>
                </div>
              </th>
              <th>
                {t("beers:name")}
                <div className="BeerList-filters">
                  <span className="BeerList-orderAsc" onClick={this.orderAsc.bind(this, "name")}>^</span>
                  <span className="BeerList-orderDesc" onClick={this.orderDesc.bind(this, "name")}>V</span>
                </div>
              </th>
              <th className={smallFieldCx}>
                ABV
                <div className="BeerList-filters">
                  <span className="BeerList-orderAsc" onClick={this.orderAsc.bind(this, "abv")}>^</span>
                  <span className="BeerList-orderDesc" onClick={this.orderDesc.bind(this, "abv")}>V</span>
                </div>
              </th>
              <th>
                {t("beers:style")}
                <div className="BeerList-filters">
                  <span className="BeerList-orderAsc" onClick={this.orderAsc.bind(this, "style")}>^</span>
                  <span className="BeerList-orderDesc" onClick={this.orderDesc.bind(this, "style")}>V</span>
                </div>
              </th>
              <th className={smallFieldCx}>
                {t("beers:country")}
                <div className="BeerList-filters">
                  <span className="BeerList-orderAsc" onClick={this.orderAsc.bind(this, "country")}>^</span>
                  <span className="BeerList-orderDesc" onClick={this.orderDesc.bind(this, "country")}>V</span>
                </div>
              </th>
              <th>
                {t("beers:city")}
                <div className="BeerList-filters">
                  <span className="BeerList-orderAsc" onClick={this.orderAsc.bind(this, "city")}>^</span>
                  <span className="BeerList-orderDesc" onClick={this.orderDesc.bind(this, "city")}>V</span>
                </div>
              </th>
            </tr>
            {map(this.sortedBeers(), (src, i) => {
              return (
                <tr key={i}>
                  <td>{src.brand}</td>
                  <td>{src.name}</td>
                  <td className={smallFieldCx}>{src.abv}%</td>
                  <td>{src.style}</td>
                  <td className={smallFieldCx}>{src.country}</td>
                  <td>{src.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function select(state){
  return {
    beers: state.beers
  };
}

export default translate(["contact"])(connect(select)(BeerList));
