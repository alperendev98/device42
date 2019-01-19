/**
 * User Widgets Page
 */
import React, { Component } from 'react';

import {
	ActiveUser,
	PersonalSchedule,
	ToDoListWidget,
	NewCustomersWidget,
	LatestPost,
	ActivityBoard,
	CommentsWidget,
	TwitterFeeds,
	OurLocations,
	SocialCompaninesWidget
} from "Components/Widgets";

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';


export default class UserWidgets extends Component {
	render() {
		return (
			<div className="user-widgets-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.user" />} match={this.props.match} />
				<div className="row">
					<RctCollapsibleCard
						colClasses="col-sm-6 col-md-4 col-lg-4 w-8-half-block"
						fullBlock
						customClasses="overflow-hidden"
					>
						<ActiveUser />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-6 col-md-4 col-lg-4 w-8-half-block"
						fullBlock
						customClasses="overflow-hidden bg-light-yellow"
					>
						<PersonalSchedule />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-6 col-md-4 col-lg-4 w-8-full"
						fullBlock
						customClasses="overflow-hidden"
					>
						<OurLocations />
					</RctCollapsibleCard>
				</div>
				<div className="row">
					<RctCollapsibleCard
						customClasses="to-do-list"
						colClasses="col-sm-6 col-md-4 col-lg-4 w-8-half-block"
						heading={<IntlMessages id="widgets.toDoList" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<ToDoListWidget />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-6 col-md-4 col-lg-4 w-8-half-block"
						heading={<IntlMessages id="widgets.newCustomers" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<NewCustomersWidget />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-4 col-lg-4 w-8-full"
						fullBlock
					>
						<TwitterFeeds />
					</RctCollapsibleCard>
				</div>
				<div className="row">
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-12 col-lg-6 d-xxs-full"
						heading={<IntlMessages id="widgets.latestPost" />}
						collapsible
						reloadable
						closeable
						customClasses="overflow-hidden"
						fullBlock
					>
						<LatestPost />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-12 col-lg-6 d-xxs-full"
						heading={<IntlMessages id="widgets.activityBoard" />}
						collapsible
						reloadable
						closeable
						customClasses="overflow-hidden"
						fullBlock
					>
						<ActivityBoard />
					</RctCollapsibleCard>
				</div>
				<div className="row">
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-6 w-xs-full"
						heading={<IntlMessages id="widgets.commments" />}
						contentCustomClasses="comment-section"
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<CommentsWidget />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-6 w-xs-full"
						heading={<IntlMessages id="widgets.socialCompanines" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<SocialCompaninesWidget />
					</RctCollapsibleCard>
				</div>
			</div>
		);
	}
}
