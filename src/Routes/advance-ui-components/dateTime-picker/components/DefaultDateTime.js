// Default Date Time Picker
import React, { Component } from 'react';
import { DateTimePicker } from 'material-ui-pickers';

export default class DateAndTimePickers extends Component {

	state = {
		selectedDate: new Date(),
	};

	handleDateChange = (date) => {
		this.setState({ selectedDate: date });
	};

	render() {
		const { selectedDate } = this.state;
		return (
			<div className="rct-picker">
				<DateTimePicker
					fullWidth
					clearable
					label="Choose a Date & Time"
					value={selectedDate}
					showTabs={false}
					onChange={this.handleDateChange}
					leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
					rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
				/>
			</div>
		)
	}
}
