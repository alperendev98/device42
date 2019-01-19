/**
 * Stepper Advance Ui Components
 */
import React, { Component } from 'react';

// Components
import Hozlinear from './component/Hozlinear';
import HozNonLinear from './component/HozNonLinear';
import HozAlternative from './component/HozAlternative.js';
import HozNonAlternative from './component/HozNonAlternative.js';
import VertStapper from './component/VertStapper.js';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// intl messages
import IntlMessages from 'Util/IntlMessages';

export default class StepperComponent extends Component {
	render() {
		return (
			<div className="stepper-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.stepper" />} match={this.props.match} />
				<RctCollapsibleCard
					heading="Horizontal Linear"
				>
					<Hozlinear />
				</RctCollapsibleCard>
				<RctCollapsibleCard
					heading="Horizontal Non-linear"
				>
					<HozNonLinear />
				</RctCollapsibleCard>
				<RctCollapsibleCard
					heading="Horizontal Linear - Alternative Label"
				>
					<HozAlternative />
				</RctCollapsibleCard>
				<RctCollapsibleCard
					heading="Horizontal Non Linear - Alternative Label"
				>
					<HozNonAlternative />
				</RctCollapsibleCard>
				<RctCollapsibleCard
					heading="Vertical Stepper"
				>
					<VertStapper />
				</RctCollapsibleCard>
			</div>
		);
	}
}
