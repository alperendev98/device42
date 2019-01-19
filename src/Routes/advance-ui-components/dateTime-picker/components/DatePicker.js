// Date Picker
import React, { Fragment, PureComponent } from 'react';
import moment from 'moment';
import { DatePicker } from 'material-ui-pickers';

export default class DatePickers extends PureComponent {

    state = {
        selectedDate: moment(),
    };

    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
    };

    render() {
        const { selectedDate } = this.state;
        return (
            <Fragment>
                <div className="rct-picker">
                    <DatePicker
                        label="Choose a date"
                        value={selectedDate}
                        onChange={this.handleDateChange}
                        animateYearScrolling={false}
                        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                        rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                        fullWidth
                    />
                </div>
            </Fragment>
        )

    }
}
