/**
 * Date Time Picker
 */
import React, { Component } from 'react';

// components
import DatePicker from './components/DatePicker';
import TimePicker from './components/TimePicker';
import DateTime from './components/DateTime';
import DefaultDateTime from './components/DefaultDateTime';
import CustomPicker from './components/CustomPicker';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// intl messages
import IntlMessages from 'Util/IntlMessages';

class RctPickers extends Component {
	render() {
		return (
			<div className="date-time-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.dateAndTimePicker" />} match={this.props.match} />
				<div className="alert alert-info">
					<p>Date And time pickers components, that implements material design for material-ui v1. There are multiple ways to use this component to allow greater flexibility and with better customization. If You want ti see more demos
						
            	</p>
				</div>
				<div className="row">
					<RctCollapsibleCard
						heading={<IntlMessages id="widgets.defaultPicker" />}
						colClasses="col-sm-12 col-md-6 col-xl-4"
					>
						<DatePicker />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-6 col-xl-4"
						heading={<IntlMessages id="widgets.timePicker" />}
					>
						<TimePicker />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-6 col-xl-4"
						heading={<IntlMessages id="widgets.dateAndTimePicker" />}
					>
						<DateTime />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-6 col-xl-4"
						heading={<IntlMessages id="widgets.defaultDatePicker" />}
					>
						<DefaultDateTime />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-6 col-xl-4"
						heading={<IntlMessages id="widgets.customPicker" />}
					>
						<CustomPicker />
					</RctCollapsibleCard>
				</div>
			</div>
		);
	}
}

export default RctPickers;
