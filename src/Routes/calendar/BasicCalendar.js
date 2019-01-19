/**
 * Basic Calendar
 */
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// events
import events from './events';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class BasicCalendar extends Component {
  render() {
    return (
      <div className="calendar-wrapper">
        <PageTitleBar title={<IntlMessages id="sidebar.basic" />} match={this.props.match} />
        <RctCollapsibleCard
          heading="Basic Calendar"
        >
          <BigCalendar
            events={events}
            views={allViews}
            step={60}
            showMultiDayTimes
            defaultDate={new Date(2015, 3, 12)}
          />
        </RctCollapsibleCard>
      </div>
    );
  }
}

export default BasicCalendar;
