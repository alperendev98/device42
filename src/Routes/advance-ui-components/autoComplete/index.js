/**
 * Auto Complete Advance UI Components
 */
import React, { Component } from 'react';

// Components
import ReactSelect from './component/ReactSelect.js';
import Downshift from './component/Downshift.js';
import ReactAutoSuggest from './component/ReactAutoSuggest.js';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// intl messages
import IntlMessages from 'Util/IntlMessages';

export default class AutoComplete extends Component {
	render() {
		return (
			<div className="autoComplete-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.autoComplete" />} match={this.props.match} />
				<RctCollapsibleCard
					heading="React Select"
				>
					<ReactSelect />
				</RctCollapsibleCard>
				<div className="row">
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-6"
						heading="Downshift AutoComplete"
					>
						<Downshift />
					</RctCollapsibleCard>
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-6"
						heading="React Autosuggest"
					>
						<ReactAutoSuggest />
					</RctCollapsibleCard>
				</div>
			</div>
		);
	}
}
