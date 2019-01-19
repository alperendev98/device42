/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";

import {DeviceComponent} from "Components/AsyncComponent/AsyncComponent"
const Dashboard = ({ match }) => (
    <div className="content-wrapper">
        <Helmet>
            <title>Select Device to view</title>
            <meta name="description" content="Device42 Tables" />
        </Helmet>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/all-devices`} />
            <Route path={`${match.url}/all-devices`} component={DeviceComponent} />
        </Switch>
    </div>
);

export default Dashboard;
