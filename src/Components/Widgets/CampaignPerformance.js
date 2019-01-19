/**
 * Campaign Performance Widget
 */
import React, { Component } from 'react'
import { Input, FormGroup } from 'reactstrap';

// chart
import CampaignBarChart from 'Components/Charts/CampaignBarChart';

// intl messages
import IntlMessages from 'Util/IntlMessages';

const campaigns = {
	yesterday: [
		{ name: '12:00 AM', websiteViews: 600, emailSubscription: 400 },
		{ name: '4:00 AM', websiteViews: 900, emailSubscription: 550 },
		{ name: '8:00 AM', websiteViews: 660, emailSubscription: 400 },
		{ name: '12:00 PM', websiteViews: 750, emailSubscription: 400 },
		{ name: '16:00 PM', websiteViews: 800, emailSubscription: 450 }
	],
	last5Days: [
		{ name: 'Mon', websiteViews: 600, emailSubscription: 400 },
		{ name: 'Tue', websiteViews: 900, emailSubscription: 700 },
		{ name: 'Wed', websiteViews: 725, emailSubscription: 500 },
		{ name: 'Thu', websiteViews: 900, emailSubscription: 625 },
		{ name: 'Fri', websiteViews: 460, emailSubscription: 400 }
	],
	last1Month: [
		{ name: '1-5', websiteViews: 800, emailSubscription: 700 },
		{ name: '6-10', websiteViews: 700, emailSubscription: 600 },
		{ name: '11-15', websiteViews: 725, emailSubscription: 400 },
		{ name: '16-20', websiteViews: 600, emailSubscription: 400 },
		{ name: '21-25', websiteViews: 900, emailSubscription: 500 }
	],
	last5Months: [
		{ name: 'Jan', websiteViews: 900, emailSubscription: 800 },
		{ name: 'Feb', websiteViews: 700, emailSubscription: 450 },
		{ name: 'Mar', websiteViews: 725, emailSubscription: 550 },
		{ name: 'Apr', websiteViews: 625, emailSubscription: 500 },
		{ name: 'May', websiteViews: 600, emailSubscription: 450 }
	]
}

export default class CampaignPerformance extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedCamapign: campaigns['last5Days'],
			campaigns,
			selected: 'last5Days'
		}
	};

	// get random property of object
	pickRandomProperty(obj) {
		var result;
		var count = 0;
		for (var prop in obj)
			if (Math.random() < 1 / ++count)
				result = prop;
		return result;
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			let randomDataKey = this.pickRandomProperty(this.state.campaigns);
			this.setState({
				selectedCamapign: campaigns[randomDataKey],
				selected: randomDataKey
			});
		}, 2000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		const { selectedCamapign } = this.state;
		return (
			<div>
				<CampaignBarChart
					data={selectedCamapign}
				/>
				<div className="d-flex justify-content-between align-items-center mt-15">
					<div className="app-selectbox-sm w-30">
						<FormGroup className="mb-0">
							<Input
								type="select"
								className="fs-12"
								name="select"
								id="exampleSelect"
								onChange={(e) => this.setState({ selectedCamapign: this.state.campaigns[e.target.value] })}
								value={this.state.selected}
							>
								<option disabled>Select Campaign</option>
								<option value="last5Days">Last 5 Days</option>
								<option value="yesterday">Yesterday</option>
								<option value="last1Month">Last 1 Month</option>
								<option value="last5Months">Last 5 Months</option>
							</Input>
						</FormGroup>
					</div>
					<span className="fs-12 text-base">
						<i className="mr-5 zmdi zmdi-refresh"></i>
						<IntlMessages id="widgets.updated10Minago" />
					</span>
				</div>
			</div>
		);
	};
};
