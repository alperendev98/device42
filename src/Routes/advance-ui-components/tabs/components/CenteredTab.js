/**
 * Centered Tab
 */
import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

class CenteredTab extends Component {

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
                heading={<IntlMessages id="widgets.centeredLabels" />}
            >
                <Tabs
                    value={activeIndex}
                    onChange={(e, value) => this.handleChange(value)}
                    textColor="primary"
                    indicatorColor="primary"
                    centered>
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </RctCollapsibleCard>
        );
    }
}

export default CenteredTab;
