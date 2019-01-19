/**
 * Miscellaneous Widgets Page
 */
import React, { Component } from 'react';

import {
	Space,
	Reminders,
	ContactRequestWidget,
	WeatherWidget,
	SocialFeedsWidget,
	NewEmailsWidget,
	EmployeePayrollWidget,
	OrderStatusWidget,
	DiscoverPeoplesWidget,
	ProductReportsWidget,
	WeatherWidgetV2,
	RecentActivity,
	ComposeEmailWidget,
	CurrentTimeLocation,
	CurrentDateWidget,
	TodayOrdersStatsWidget
} from "Components/Widgets";

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

import {
	spaceUsed
} from '../data';

export default class GeneralWidgets extends Component {
	render() {
		return (
			<div className="general-widgets-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.general" />} match={this.props.match} />
				<div className="dash-cards">
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
							<Reminders />
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
							<ContactRequestWidget />
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
							<Space data={spaceUsed} />
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
							<WeatherWidget />
						</div>
					</div>
				</div>
				<div className="social-card-wrapper">
					<div className="row">
						<div className="col-sm-6 col-md-3 col-lg-3 w-xs-half-block">
							<SocialFeedsWidget
								type="facebook"
								friendsCount="89k"
								icon="ti-facebook"
								feedsCount="459"
							/>
						</div>
						<div className="col-sm-6 col-md-3 col-lg-3 w-xs-half-block">
							<SocialFeedsWidget
								type="twitter"
								friendsCount="89k"
								feedsCount="459"
								icon="ti-twitter"
							/>
						</div>
						<div className="col-sm-6 col-md-3 col-lg-3 w-xs-half-block">
							<SocialFeedsWidget
								type="linkedin"
								friendsCount="89k"
								feedsCount="459"
								icon="ti-linkedin"
							/>
						</div>
						<div className="col-sm-6 col-md-3 col-lg-3 w-xs-half-block">
							<SocialFeedsWidget
								type="google"
								friendsCount="89k"
								feedsCount="459"
								icon="ti-google"
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-7 col-xl-7 b-100 w-xs-full"
						heading={<IntlMessages id="widgets.newEmails" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<NewEmailsWidget />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-5 col-xl-5 b-100 w-xs-full"
						heading={<IntlMessages id="widgets.employeePayroll" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<EmployeePayrollWidget />
					</RctCollapsibleCard>
				</div>
				<RctCollapsibleCard
					heading={<IntlMessages id="widgets.orderStatus" />}
					collapsible
					reloadable
					closeable
					fullBlock
				>
					<OrderStatusWidget />
				</RctCollapsibleCard>
				<div className="row">
					<RctCollapsibleCard
						colClasses="col-sm-6 col-md-4 col-lg-4 w-xs-half-block"
						heading={<IntlMessages id="widgets.discoverPeople" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<DiscoverPeoplesWidget />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-6 col-md-4 col-lg-4 w-xs-half-block"
						heading={<IntlMessages id="widgets.productReports" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<ProductReportsWidget />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-4 col-lg-4 w-xs-full"
						heading={<IntlMessages id="widgets.recentActivities" />}
						collapsible
						reloadable
						closeable
					>
						<RecentActivity />
					</RctCollapsibleCard>
				</div>
				<div className="row">
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-8 w-xs-full"
						heading={<IntlMessages id="widgets.ComposeEmail" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<ComposeEmailWidget />
					</RctCollapsibleCard>
					<div className="col-sm-12 col-md-4 w-xs-full">
						<CurrentTimeLocation />
						<CurrentDateWidget />
						<TodayOrdersStatsWidget />
					</div>
				</div>
				<div className="row">
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-6 w-xs-full"
						fullBlock
					>
						<WeatherWidgetV2 city="Chandigarh" />
					</RctCollapsibleCard>
				</div>
			</div>
		);
	}
}
