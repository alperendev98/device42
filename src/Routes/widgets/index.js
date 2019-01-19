/**
 * Pages Routes
 */
import React from 'react';
import { Helmet } from "react-helmet";
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {
	AsyncUserWidgetComponent,
	AsyncUserChartsComponent,
	AsyncGeneralWidgetsComponent,
	AsyncPromoWidgetsComponent
} from 'Components/AsyncComponent/AsyncComponent';

const Pages = ({ match }) => (
	<div className="content-wrapper">
		<Helmet>
			<title>Device42 | Widgets</title>
			<meta name="description" content="Device42 Widgets" />
		</Helmet>
		<Switch>
			<Redirect exact from={`${match.url}/`} to={`${match.url}/user`} />
			<Route path={`${match.url}/user`} component={AsyncUserWidgetComponent} />
			<Route path={`${match.url}/charts`} component={AsyncUserChartsComponent} />
			<Route path={`${match.url}/general`} component={AsyncGeneralWidgetsComponent} />
			<Route path={`${match.url}/promo`} component={AsyncPromoWidgetsComponent} />
		</Switch>
	</div>
);

export default Pages;
