/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";

import {
    DataComponent
} from "Components/AsyncComponent/AsyncComponent"
const Dashboard = ({ match }) => (
    <div className="content-wrapper">
        <Helmet>
            <title>Dashboard</title>
            <meta name="description" content="Device42 Dashboard" />
        </Helmet>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/data/device`} />
            <Route path={`${match.url}/data/:type`} component={DataComponent} />            
        </Switch>
    </div>
);

export default Dashboard;
