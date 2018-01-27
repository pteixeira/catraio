import "./index.styl";

import React, { PropTypes, Component } from "react";
import Immutable from "immutable";
import classnames from "classnames";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import { compose, setDisplayName, setPropTypes, defaultProps } from "recompose";
import moment from "moment";

import Event from "./event";
import { addPastEvents } from "app-root/actions/pastevents";

class Events extends Component {

  state = {
    isShowingPastEvents: false
  }

  //----------------------------------------------------------------------------
  // Event Handlers
  //----------------------------------------------------------------------------
  showPastEvents() {
    const { pastevents, dispatch } = this.props
    // const { isShowingPastEvents } = this.state;

    this.setState({ isShowingPastEvents: true });

    if (pastevents.size > 0) {
      return;
    }

    dispatch(addPastEvents());
  }

  // handleShowMore = () => {
  //   const { onlyShowNext } = this.props;
  //   const { isShowingPastEvents } = this.state;

  //   if (onlyShowNext) return;

  //   isShowingPastEvents ? this.loadMore() : this.showPastEvents();
  // }

  //----------------------------------------------------------------------------
  // Render
  //----------------------------------------------------------------------------
  render() {
    const { t, events, onlyShowNext } = this.props;
    const { isShowingPastEvents } = this.state;

    const sortedEvents = events
      .sortBy(ev => ev.start_time)
      .filter(ev =>  moment(ev.get("end_time")) > moment());

    const showMoreCx = classnames("ShowMoreEvents", {
      visible: !isShowingPastEvents && !onlyShowNext,
    })

    return (
      <div className="Events">

        <div className="UpcomingEvents">
          {sortedEvents.size > 0 && onlyShowNext
            ? <Event event={sortedEvents.last()} />
            : sortedEvents.map((event, i) => <Event key={i} event={event} />)
          }
        </div>

        <a className={showMoreCx} href="https://www.facebook.com/pg/catraiobeershop/events/" target="_blank" rel="noopener noreferrer">
          {t("events:show-past")}
        </a>
      </div>
    );
  }
}

export default compose(
  setDisplayName("Events"),

  translate([ "events" ]),

  connect(({ events }) => ({ events })),

  setPropTypes({
    events: PropTypes.instanceOf(Immutable.List).isRequired,
    onlyShowNext: PropTypes.bool.isRequired,
  }),

  defaultProps({
    onlyShowNext: false,
  }),
)(Events);
