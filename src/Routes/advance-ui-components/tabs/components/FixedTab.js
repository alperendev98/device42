/**
 * Fixed Tab
 */
import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

function TabContainer({ children }) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

class FixedTab extends Component {

    state = {
        activeIndex: 0
    }

    handleChangeIndex(index) {
        this.setState({ activeIndex: index });
    }

    handleChange(event, value) {
        this.setState({ activeIndex: value });
    }

    render() {
        return (
            <RctCollapsibleCard
                heading={<IntlMessages id="widgets.fixedTabs" />}
            >
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.activeIndex}
                        onChange={(e, value) => this.handleChange(e, value)}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={'x'}
                    index={this.state.activeIndex}
                    onChangeIndex={(index) => this.handleChangeIndex(index)}>
                    <TabContainer>Item One</TabContainer>
                    <TabContainer>Item Two</TabContainer>
                    <TabContainer>Item Three</TabContainer>
                </SwipeableViews>
            </RctCollapsibleCard>
        );
    }
}

export default FixedTab;
