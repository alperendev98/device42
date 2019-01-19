/**
* Report Page
*/
import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Alert } from 'reactstrap';
import Button from '@material-ui/core/Button';
import { Helmet } from "react-helmet";
//components
import { OrderStatusWidget } from "Components/Widgets";
import ReportStats from './components/ReportStats';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

export default class Report extends Component {
	// Alert Dismiss
	constructor(props) {
		super(props);
		this.state = {
			visible: true
		};
		this.onDismiss = this.onDismiss.bind(this);
	}
	onDismiss() {
		this.setState({ visible: false });
	}

	render() {
		return (
			<div className="report-wrapper">
				<Helmet>
					<title>Device42 | Reports</title>
					<meta name="description" content="Device42 Reports" />
				</Helmet>
				<PageTitleBar title={<IntlMessages id="sidebar.report" />} match={this.props.match} />
				<Alert className="d-flex align-items-center" color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
					<i className="zmdi zmdi-check check-circle"></i> All the reports are generated successfully today, 20 March 2018 @12:10 PM
        		</Alert>
				<div className="report-status mb-30">
					<div className="row">
						<div className="col-md-12">
							<div className="top-filter clearfix p-20">
								<FormGroup className="w-20 mb-5">
									<Label for="startDate">Start Date</Label>
									<Input type="date" name="date" id="startDate" placeholder="dd/mm/yyyy" />
								</FormGroup>
								<FormGroup className="w-20 mb-5">
									<Label for="endDate">End Date</Label>
									<Input type="date" name="date" id="endDate" placeholder="dd/mm/yyyy" />
								</FormGroup>
								<FormGroup className="w-20 mb-5">
									<Label for="Select-1">Category</Label>
									<div className="app-selectbox-sm">
										<Input type="select" name="select" id="Select-2">
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
										</Input>
									</div>
								</FormGroup>
								<FormGroup className="mb-5">
									<Label className="d-block">&nbsp;</Label>
									<Button color="primary"  className="mr-10 text-white"><IntlMessages id="widgets.apply" /></Button>
								</FormGroup>
								<FormGroup className="mb-5">
									<Label className="d-block">&nbsp;</Label>
									<Button className="btn-success text-white">Download .pdf Report</Button>
								</FormGroup>
							</div>
						</div>
					</div>
					<ul className="list-inline d-flex align-content-center">
						<li className="list-inline-item col">
							<h4>Today</h4>
							<h2 className="title">$335</h2>
							<h4>1 Order</h4>
						</li>
						<li className="list-inline-item col">
							<h4>Yesterday</h4>
							<h2 className="title">$387</h2>
							<h4>1 Order</h4>
						</li>
						<li className="list-inline-item col">
							<h4>Last 7 Days</h4>
							<h2 className="title">$335</h2>
							<h4>9 Order</h4>
						</li>
						<li className="list-inline-item col">
							<h4>Last 30 Days</h4>
							<h2 className="title">$28k</h2>
							<h4>37 Orders</h4>
						</li>
						<li className="list-inline-item col">
							<h4>Last 90 Days</h4>
							<h2 className="title">$61.6k</h2>
							<h4>101 orders</h4>
						</li>
					</ul>
					<ReportStats />
				</div>
				<RctCollapsibleCard
					heading="Order Status"
					fullBlock
				>
					<OrderStatusWidget />
				</RctCollapsibleCard>
			</div>
		);
	}
}
