import "./beers.styl";

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { connect } from "react-redux";
import { map, throttle } from "lodash";
import classnames from "classnames";

import{ setBeers } from "../../actions/beers";
import "exports?self.fetch!whatwg-fetch";

class BeerList extends React.Component {
  constructor(props) {
    super(props);

    this.throttledBoundHandleScroll = throttle(this.handleScroll.bind(this), 200);
  };

  static displayName = "BeerList";

  static propTypes = {
    beers: React.PropTypes.array.isRequired
  };

  static defaultProps = {
    "beers": []
  };

  state = {
    isHeaderSticky: false
  };

  static initialHeaderPosition;

  componentWillMount() {
  }

  componentDidMount() {
    this.initialHeaderPosition = ReactDOM.findDOMNode(this.refs.headers).getBoundingClientRect().top;
    window.addEventListener("scroll", this.throttledBoundHandleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.throttledBoundHandleScroll);
  }

  handleScroll(ev) {
    // If we passed the headers height, we only change if the header is not sticky.
    // Same goes for when we scroll up, we only change if the header is sticky
    if (window.scrollY < this.initialHeaderPosition) {
      if (this.state.isHeaderSticky) {
        this.setState({ isHeaderSticky: false });
      }
    } else {
      if (!this.state.isHeaderSticky) {
        this.setState({ isHeaderSticky: true });
      }
    }
  }

  render() {
    const headerCx = classnames("", {
      "sticky": this.state.isHeaderSticky === true
    });
    return (
      <div className="BeerList">
        <table>
          <tbody>
            <tr ref="headers" className={headerCx}>
              <th>Brand</th>
              <th>Name</th>
              <th>ABV</th>
              <th>Style</th>
              <th>Country</th>
              <th>City</th>
            </tr>
            {map(this.props.beers, (src, i) => {
                return (
                  <tr key={i}>
                    <td>{src.brand}</td>
                    <td>{src.name}</td>
                    <td>{src.abv}%</td>
                    <td>{src.style}</td>
                    <td>{src.country}</td>
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

export default connect(select)(BeerList);
