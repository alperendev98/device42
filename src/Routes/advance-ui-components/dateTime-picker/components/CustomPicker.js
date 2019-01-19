// Custom Picker
import React, { Component } from 'react';
import { DateTimePicker } from 'material-ui-pickers';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

export default class CustomDateTimePicker extends Component {

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
                    label="Choose a Date & Time"
                    clearable
                    error
                    autoOk
                    showTabs={false}
                    autoSubmit={false}
                    disableFuture
                    value={selectedDate}
                    onChange={this.handleDateChange}
                    helperText="Required"
                    leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                    rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton><i className="zmdi zmdi-alarm" /></IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        )
    }
}
