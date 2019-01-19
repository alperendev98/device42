/**
 * Cultures Calendar
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

require('globalize/lib/cultures/globalize.culture.en-GB')
require('globalize/lib/cultures/globalize.culture.es')
require('globalize/lib/cultures/globalize.culture.fr')
require('globalize/lib/cultures/globalize.culture.ar-AE')

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Cultures extends React.Component {
	state = { culture: 'fr' }

	render() {
		let cultures = ['en', 'en-GB', 'es', 'fr', 'ar-AE']
		let rtl = this.state.culture === 'ar-AE'

		return (
			<div className="calendar-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.cultures" />} match={this.props.match} />
				<RctCollapsibleCard
					heading="Cultures Calendar"
				>
					<h3 className="callout mb-30">
						<label>Select a Culture</label>{' '}
						<select
							className="form-control"
							style={{ width: 200, display: 'inline-block' }}
							defaultValue={'fr'}
							onChange={e => this.setState({ culture: e.target.value })} >
							{cultures.map((c, idx) => (
								<option key={idx} value={c}>
									{c}
								</option>
							))}
						</select>
					</h3>
					<BigCalendar
						rtl={rtl}
						events={events}
						culture={this.state.culture}
						defaultDate={new Date(2015, 3, 12)}
					/>
				</RctCollapsibleCard>
			</div>
		)
	}
}

export default Cultures
