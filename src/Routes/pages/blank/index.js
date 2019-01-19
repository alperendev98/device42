/**
 * Blank Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

export default class Blank extends Component {
	render() {
		return (
			<div className="blank-wrapper">
				<Helmet>
					<title>Blank Page</title>
					<meta name="description" content="Device42 Blank Page" />
				</Helmet>
				<PageTitleBar title={<IntlMessages id="sidebar.blank" />} match={this.props.match} />
			</div>
		);
	}
}
