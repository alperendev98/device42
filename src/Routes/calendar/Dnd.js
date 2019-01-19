/**
 * Dnd Calendar
 */
import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import BigCalendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';

// demo data
import events from './events';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// intl messages
import IntlMessages from 'Util/IntlMessages';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

const DragAndDropCalendar = withDragAndDrop(BigCalendar)

class Dnd extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      events: events,
    }
    this.moveEvent = this.moveEvent.bind(this)
  }

  moveEvent({ event, start, end }) {
    console.log('work');
    const { events } = this.state
    const idx = events.indexOf(event)
    const updatedEvent = { ...event, start, end }
    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)
    this.setState({
      events: nextEvents,
    })
    alert(`${event.title} was dropped onto ${event.start}`)
  }

  resizeEvent = (resizeType, { event, start, end }) => {
    const { events } = this.state
    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })
    this.setState({
      events: nextEvents,
    })
    alert(`${event.title} was resized to ${start}-${end}`)
  }

  render() {
    return (
      <div className="calendar-wrapper">
        <PageTitleBar title={<IntlMessages id="sidebar.dnd" />} match={this.props.match} />
        <RctCollapsibleCard
          heading="Drag And Drop Calendar"
        >
          <DragAndDropCalendar
            selectable
            events={this.state.events}
            onEventDrop={this.moveEvent}
            resizable
            onEventResize={this.resizeEvent}
            defaultView="month"
            defaultDate={new Date(2015, 3, 12)}
          />
        </RctCollapsibleCard>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Dnd)
