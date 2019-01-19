/**
 * Selectable Calendar
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

let Selectable = ({ match }) => (
	<div className="calendar-wrapper">
		<PageTitleBar title={<IntlMessages id="sidebar.selectable" />} match={match} />
		<RctCollapsibleCard
			heading="Selectable Calender"
		>
			<h3 className="callout mb-30">
				Click an event to see more info, or drag the mouse over the calendar to
          select a date/time range.
          </h3>
			<BigCalendar
				selectable
				events={events}
				defaultView="week"
				scrollToTime={new Date(1970, 1, 1, 6)}
				defaultDate={new Date(2015, 3, 12)}
				onSelectEvent={event => alert(event.title)}
				onSelectSlot={slotInfo =>
					alert(
						`selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
						`\nend: ${slotInfo.end.toLocaleString()}` +
						`\naction: ${slotInfo.action}`
					)
				}
			/>
		</RctCollapsibleCard>
	</div>
)

export default Selectable
