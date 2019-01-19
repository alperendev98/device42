// Date Time Picker
import React, { Component } from 'react';
import { DateTimePicker } from 'material-ui-pickers';

export default class DefaultDateAndTimePickers extends Component {

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
					value={selectedDate}
					clearable
					label="Choose a date & Time"
					onChange={this.handleDateChange}
					leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
					rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
					fullWidth
				/>
			</div>
		)
	}
}
