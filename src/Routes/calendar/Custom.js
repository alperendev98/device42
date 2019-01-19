/**
 * Custom Calendar
 */
import React from 'react';
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

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

function Event({ event }) {
  return (
    <span>
      <strong>{event.title}</strong>
      {event.desc && ':  ' + event.desc}
    </span>
  )
}

function EventAgenda({ event }) {
  return (
    <span>
      <em style={{ color: 'magenta' }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  )
}

const customDayPropGetter = date => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
      style: {
        border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
      },
    }
  else return {}
}

const customSlotPropGetter = date => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
    }
  else return {}
}

let Rendering = ({ match }) => (
  <div className="calendar-wrapper">
    <PageTitleBar title={<IntlMessages id="sidebar.customRendering" />} match={match} />
    <RctCollapsibleCard
      heading="Custom Rendering"
    >
      <BigCalendar
        events={events}
        defaultDate={new Date(2015, 3, 12)}
        defaultView="agenda"
        dayPropGetter={customDayPropGetter}
        slotPropGetter={customSlotPropGetter}
        components={{
          event: Event,
          agenda: {
            event: EventAgenda,
          },
        }}
      />
    </RctCollapsibleCard>
  </div>
)

export default Rendering
