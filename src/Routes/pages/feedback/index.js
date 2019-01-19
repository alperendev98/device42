/**
* Feedback Page
*/
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Helmet } from "react-helmet";
// components
import FeedbacksListing from './components/FeedbacksListings';
import AddNewFeedback from './components/AddNewFeedback';
import FeedbackDetail from './components/FeedbackDetail';
import SearchIdeas from './components/SearchIdeas';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// actions
import { onChangeFeedbackPageTabs, getFeedbacks } from 'Actions';

// For Tab Content
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class FeedbackPage extends Component {

  componentWillMount() {
    this.props.getFeedbacks();
  }

  handleChange = (event, value) => {
    this.props.onChangeFeedbackPageTabs(value);
  }

  render() {
    const { selectedTab, selectedFeedback, loading, totalFeedbacksCount, plannedFeedbacksCount, progressFeedbacksCount } = this.props;
    return (
      <div className="feedback-wrapper">
        <Helmet>
          <title>Feedback</title>
          <meta name="description" content="Device42 Feedback Page" />
        </Helmet>
        <PageTitleBar title={<IntlMessages id="sidebar.feedback" />} match={this.props.match} />
        {selectedFeedback === null ?
          <div>
            <SearchIdeas />
            <RctCollapsibleCard customClasses="rct-tabs">
              {loading &&
                <div className="d-flex justify-content-center loader-overlay">
                  <CircularProgress />
                </div>
              }
              <AppBar position="static">
                <Tabs
                  value={selectedTab}
                  onChange={this.handleChange}
                  scrollable
                  scrollButtons="off"
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab label={`All (${totalFeedbacksCount})`} />
                  <Tab label={`Planned (${plannedFeedbacksCount})`} />
                  <Tab label={`In Progress (${progressFeedbacksCount})`} />
                  <Tab label="Add New" />
                </Tabs>
              </AppBar>
              {selectedTab === 0 && <TabContainer><FeedbacksListing /></TabContainer>}
              {selectedTab === 1 && <TabContainer><FeedbacksListing /></TabContainer>}
              {selectedTab === 2 && <TabContainer><FeedbacksListing /></TabContainer>}
              {selectedTab === 3 &&
                <TabContainer>
                  <AddNewFeedback />
                </TabContainer>}
            </RctCollapsibleCard>
          </div>
          : <FeedbackDetail />
        }
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ feedback }) => {
  return feedback;
}

export default connect(mapStateToProps, {
  onChangeFeedbackPageTabs,
  getFeedbacks
})(FeedbackPage);
