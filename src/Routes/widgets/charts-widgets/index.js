/**
 * Charts Widgets Page
 */
import React, { Component } from 'react';

import {
	DailySales,
	CampaignPerformance,
	TrafficChannel,
	EmailStatisticsVersion2Widget,
	TotalEarnsChartWidget,
	BandWidthAreaChartWidget,
	BandWidthUsageBarChartWidget,
	TotalEarnsWithAreaChartWidget,
	ProductStatsWidget,
	EmailStaticsWidget,
	RevenueWidget,
	OnlineVisitorsWidget,
	TrafficSourcesWidget,
	BandwidthUsageWidget,
	SiteVisitorChartWidget
} from "Components/Widgets";

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// widgets data
import {
	emailStatisticsData,
	dataUsed,
	productStats,
	emailStatisticsV2Data,
	totalRevenue,
	onlineVisitorsData,
	trafficSources,
	totalEarnsV2,
	dailySales,
	trafficChannel,
	siteVisitors,
	totalEarns,
} from '../data';

export default class ChartsWidgets extends Component {
	render() {
		return (
			<div className="charts-widgets-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.charts" />} match={this.props.match} />
				<RctCollapsibleCard
					heading={<IntlMessages id="widgets.totalEarns" />}
					collapsible
					reloadable
					closeable
				>
					<TotalEarnsWithAreaChartWidget chartData={totalEarns} />
				</RctCollapsibleCard>
				<div className="row">
					<RctCollapsibleCard
						customClasses="overflow-hidden"
						colClasses="col-sm-6 col-md-4 w-xs-half-block"
						heading={<IntlMessages id="widgets.dailySales" />}
						badge={{
							name: <IntlMessages id="widgets.today" />,
							class: 'danger'
						}}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<DailySales
							label={dailySales.label}
							chartdata={dailySales.chartdata}
							labels={dailySales.labels}
						/>
					</RctCollapsibleCard>
					<RctCollapsibleCard
						heading={<IntlMessages id="widgets.trafficChannel" />}
						customClasses="overflow-hidden"
						colClasses="col-sm-6 col-md-4 w-xs-half-block"
						badge={{
							name: <IntlMessages id="widgets.today" />,
							class: 'danger'
						}}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<TrafficChannel
							label={trafficChannel.label}
							chartdata={trafficChannel.chartdata}
							labels={trafficChannel.labels}
						/>
					</RctCollapsibleCard>
					<RctCollapsibleCard
						heading={<IntlMessages id="widgets.campaignPerformance" />}
						colClasses="col-sm-6 col-md-4 w-xs-full"
						collapsible
						reloadable
						closeable
					>
						<CampaignPerformance />
					</RctCollapsibleCard>
				</div>
				<div className="dash-cards-lg">
					<div className="row">
						<div className="col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
							<RevenueWidget data={totalRevenue} />
						</div>
						<div className="col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
							<OnlineVisitorsWidget data={onlineVisitorsData} />
						</div>
						<div className="col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
							<TrafficSourcesWidget data={trafficSources} />
						</div>
						<div className="col-sm-6 col-md-3 col-xl-3 w-xs-half-block">
							<BandwidthUsageWidget />
						</div>
					</div>
				</div>
				<div className="row">
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-5 col-lg-5 col-xl-4 w-8-full"
						heading={<IntlMessages id="widgets.emailsStatistics" />}
						customClasses="gradient-primary"
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<EmailStatisticsVersion2Widget data={emailStatisticsData} />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-7 col-lg-7 col-xl-8 w-8-full"
						heading={<IntlMessages id="widgets.totalEarns" />}
						collapsible
						fullBlock
						reloadable
						closeable
					>
						<TotalEarnsChartWidget data={totalEarnsV2} />
					</RctCollapsibleCard>
				</div>
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<BandWidthAreaChartWidget />
					</div>
					<div className="col-sm-12 col-md-6">
						<BandWidthUsageBarChartWidget data={dataUsed} />
					</div>
				</div>
				<div className="row">
					<RctCollapsibleCard
						colClasses="col-md-7 col-xl-8 w-xs-half-block w-8-full"
						heading={<IntlMessages id="widgets.productStats" />}
						collapsible
						reloadable
						closeable
					>
						<ProductStatsWidget data={productStats} />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						customClasses="gradient-primary"
						colClasses="col-md-5 col-xl-4 w-xs-half-block w-8-full"
						heading={<IntlMessages id="widgets.emailsStatistics" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<EmailStaticsWidget
							openChartData={emailStatisticsV2Data.chartData.open}
							bounceChartData={emailStatisticsV2Data.chartData.bounce}
							unsubscribeData={emailStatisticsV2Data.chartData.unsubscribe}
						/>
					</RctCollapsibleCard>
				</div>
				<div className="row">
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-6 w-xs-full"
						heading={<IntlMessages id="widgets.siteVisitors" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<SiteVisitorChartWidget data={siteVisitors} />
					</RctCollapsibleCard>
				</div>
			</div>
		);
	}
}
