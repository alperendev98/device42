/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications'
// rct theme provider
import RctThemeProvider from './RctThemeProvider';

//Horizontal Layout
import HorizontalLayout from './HorizontalLayout';

//Main App
import RctDefaultLayout from './DefaultLayout';

// app signin
import AppSignIn from './Signin';
import AppSignUp from './Signup';

// async components
import {
	AsyncSessionLockScreenComponent,
	AsyncSessionForgotPasswordComponent,
	AsyncSessionPage404Component,
	AsyncSessionPage500Component,
	AsyncTermsConditionComponent
} from 'Components/AsyncComponent/AsyncComponent';

//Auth0
import Auth from '../Auth/Auth';

// callback component
import Callback from "Components/Callback/Callback";

//Auth0 Handle Authentication
const auth = new Auth();

const handleAuthentication = ({ location }) => {
	if (/access_token|id_token|error/.test(location.hash)) {
		auth.handleAuthentication();
	}
}

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({ component: Component, authUser, ...rest }) =>
	<Route
		{...rest}
		render={props =>
			authUser
				? <Component {...props} />
				: <Redirect
					to={{
						pathname: '/signin',
						state: { from: props.location }
					}}
				/>}
	/>;

class App extends Component {
	render() {
		const { location, match, user } = this.props;
		if (location.pathname === '/') {
			if (user === null) {
				return (<Redirect to={'/signin'} />);
			} else {
				return (<Redirect to={'/app/dashboard'} />);
			}
		}
		return (
			<RctThemeProvider>
				<NotificationContainer />
				<InitialPath
					path={`${match.url}app`}
					authUser={user}
					component={RctDefaultLayout}
				/>
				<Route path="/dashboard" component={HorizontalLayout} />
				<Route path="/signin" component={AppSignIn} />
				<Route path="/signup" component={AppSignUp} />
				<Route path="/session/lock-screen" component={AsyncSessionLockScreenComponent} />
				<Route
					path="/session/forgot-password"
					component={AsyncSessionForgotPasswordComponent}
				/>
				<Route path="/session/404" component={AsyncSessionPage404Component} />
				<Route path="/session/500" component={AsyncSessionPage500Component} />
				<Route path="/terms-condition" component={AsyncTermsConditionComponent} />
				<Route path="/callback" render={(props) => {
					handleAuthentication(props);
					return <Callback {...props} />
				}} />
			</RctThemeProvider>
		);
	}
}

// map state to props
const mapStateToProps = ({ authUser }) => {
	const { user } = authUser;
	return { user };
};

export default connect(mapStateToProps)(App);
