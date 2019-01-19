/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';
import LinearProgress from '@material-ui/core/LinearProgress';
import QueueAnim from 'rc-queue-anim';

// app config
import AppConfig from 'Constants/AppConfig';

// redux action 
import {
	signinUser,
} from 'Actions'
//Auth File
import Auth from '../Auth/Auth';

const auth = new Auth();

class Signin extends Component {

	state = {
		email: 'demo@example.com',
		password: 'test#123'
	}

	/**
	 * On User Login
	 */
	onUserLogin() {
		if (this.state.email !== '' && this.state.password !== '') {
			this.props.signinUser(this.state.email, this.state.password)
			
		}
	}

	/**
	 * On User Sign Up
	 */
	onUserSignUp() {
		this.props.history.push('/signup');
	}

	//Auth0 Login
	loginAuth0() {
		auth.login();
	}

	render() {
		const { email, password } = this.state;
		const { loading } = this.props;
		return (
			<QueueAnim type="bottom" duration={2000}>
				<div className="rct-session-wrapper">
					{loading &&
						<LinearProgress />
					}
					<AppBar position="static" className="session-header">
						<Toolbar>
							<div className="container">
								<div className="d-flex justify-content-between">
									<div>
										
									</div>
									<div>
										<div className="mr-15" onClick={() => this.onUserSignUp()}>Crseate New account?</div>
										<Button  className="btn-light" onClick={() => this.onUserSignUp()}>Sign Up</Button>
									</div>
								</div>
							</div>
						</Toolbar>
					</AppBar>
					<div className="session-inner-wrapper">
						<div className="container">
							<div className="row row-eq-height">
								<div className="col-sm-5 col-md-5 col-lg-5" style={{margin: 'auto'}}>
									<div className="session-body text-center">
										<div className="session-head mb-30">
											<div className="session-logo">
												<Link to="/">
													<img src={AppConfig.loginLogo} alt="session-logo" className="img-fluid"/>
												</Link>
											</div>
										</div>
										<Form>
											<FormGroup className="has-wrapper">
												<Input
													type="mail"
													value={email}
													name="user-mail"
													id="user-mail"
													className="has-input input-lg"
													placeholder="Enter Email Address"
													onChange={(event) => this.setState({ email: event.target.value })}
												/>
												<span className="has-icon"><i className="ti-email"></i></span>
											</FormGroup>
											<FormGroup className="has-wrapper">
												<Input
													value={password}
													type="Password"
													name="user-pwd"
													id="pwd"
													className="has-input input-lg"
													placeholder="Password"
													onChange={(event) => this.setState({ password: event.target.value })}
												/>
												<span className="has-icon"><i className="ti-lock"></i></span>
											</FormGroup>
											<FormGroup className="mb-15">
												<Button
													color="primary"
													className="btn-block text-white btn-info  w-100"
													
													size="large"
													onClick={() => this.onUserLogin()}
												>
													Sign In
                            					</Button>
											</FormGroup>
											
										</Form>
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</QueueAnim>
		);
	}
}

// map state to props
const mapStateToProps = ({ authUser }) => {
	const { user, loading } = authUser;
	return { user, loading }
}

export default connect(mapStateToProps, {
	signinUser
})(Signin);
