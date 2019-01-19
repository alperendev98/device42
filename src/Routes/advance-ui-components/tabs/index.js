/**
 * Tabs Advance UI Components
 */
import React from 'react';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// components
import FixedTab from './components/FixedTab';
import BasicTab from './components/BasicTab';
import WrappedLabels from './components/WrappedLabels';
import MultipleTabs from './components/MultipleTabs';
import PreventScrollButtons from './components/PreventScrollButtons';
import IconWithLabel from './components/IconWithLabel';
import CenteredTab from './components/CenteredTab';
import ForcedScrollButtons from './components/ForcedScrollButtons';
import IconsTabs from './components/IconsTabs';
import WithDisableTab from './components/WithDisableTab';

// intl messages
import IntlMessages from 'Util/IntlMessages';

class FullWidthTabs extends React.Component {

	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};

	render() {
		return (
			<div className="tabs-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.tabs" />} match={this.props.match} />
				<div className="row">
					<div className="col-sm-12 col-md-12 col-xl-6">
						<FixedTab />
						<WrappedLabels />
						<MultipleTabs />
						<PreventScrollButtons />
						<IconWithLabel />
					</div>
					<div className="col-sm-12 col-md-12 col-xl-6">
						<BasicTab />
						<CenteredTab />
						<ForcedScrollButtons />
						<IconsTabs />
						<WithDisableTab />
					</div>
				</div>
			</div>
		);
	}
}

export default FullWidthTabs;
