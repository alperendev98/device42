/**
 * Advance UI Components Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
// async routes
import {
	AsyncAdvanceUIDateAndTimePickerComponent,
	AsyncAdvanceUITabsComponent,
	AsyncAdvanceUIStepperComponent,
	AsyncAdvanceUINotificationComponent,
	AsyncAdvanceUISweetAlertComponent,
	AsyncAdvanceUIAutoCompleteComponent
} from 'Components/AsyncComponent/AsyncComponent';

const AdvanceUIComponents = ({ match }) => (
	<div className="content-wrapper">
		<Helmet>
			<title>Device42 | Advance UI Components</title>
			<meta name="description" content="Device42 Advance UI Components" />
		</Helmet>
		<Switch>
			<Redirect exact from={`${match.url}/`} to={`${match.url}/dateTime-picker`} />
			<Route path={`${match.url}/dateTime-picker`} component={AsyncAdvanceUIDateAndTimePickerComponent} />
			<Route path={`${match.url}/tabs`} component={AsyncAdvanceUITabsComponent} />
			<Route path={`${match.url}/stepper`} component={AsyncAdvanceUIStepperComponent} />
			<Route path={`${match.url}/notification`} component={AsyncAdvanceUINotificationComponent} />
			<Route path={`${match.url}/sweet-alert`} component={AsyncAdvanceUISweetAlertComponent} />
			<Route path={`${match.url}/auto-complete`} component={AsyncAdvanceUIAutoCompleteComponent} />
		</Switch>
	</div>
);

export default AdvanceUIComponents;
