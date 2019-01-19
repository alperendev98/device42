/**
 * With Disable Tab
 */
import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

class WithDisableTab extends Component {

    state = {
        activeIndex: 0
    }

    handleChange(value) {
        this.setState({ activeIndex: value });
    }

    render() {
        const { activeIndex } = this.state;
        return (
            <RctCollapsibleCard
                heading={<IntlMessages id="widgets.withDisableTabs" />}
            >
                <Tabs
                    value={activeIndex}
                    textColor="inherit"
                    color="primary"
                    onChange={(e, value) => this.handleChange(value)}>
                    <Tab label="Active" />
                    <Tab label="Disabled" disabled />
                    <Tab label="Active" />
                </Tabs>
            </RctCollapsibleCard>
        );
    }
}

export default WithDisableTab;
