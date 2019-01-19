// Time Picker
import React, { Component } from 'react';
import moment from 'moment';
import { TimePicker } from 'material-ui-pickers';

export default class TimePickers extends Component {

    state = {
        selectedDate: moment(),
    };

    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
    };

    render() {
        const { selectedDate } = this.state;
        return (
            <div className="rct-picker">
                <div className="picker">
                    <TimePicker
                        label="12 hours"
                        value={selectedDate}
                        onChange={this.handleDateChange}
                        fullWidth
                    />
                </div>
            </div>
        )
    }
}
