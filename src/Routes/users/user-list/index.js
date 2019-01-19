/**
 * User List
 */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Helmet } from "react-helmet";

// api
import api from 'api';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import { RctCard } from 'Components/RctCard';

export default class UserComponent extends Component {

	state = {
		users: null
	}

	componentDidMount() {
		this.getUsers();
	}

	// get users
	getUsers() {
		api.get('usersList.js')
			.then((response) => {
				this.setState({ users: response.data });
			})
			.catch(error => {
				// error handling
			})
	}

	render() {
		const { users } = this.state;
		return (
			<div className="user-list-wrapper">
				<Helmet>
					<title>Device42 | Users List</title>
					<meta name="description" content="Device42 Widgets" />
				</Helmet>
				<PageTitleBar title={<IntlMessages id="sidebar.userList" />} match={this.props.match} />
				<div className="row">
					{users && users.map((user, key) => (
						<RctCard customClasses="p-10" colClasses="col-sm-6 col-lg-4 col-xl-3" key={key}>
							<img src={user.coverPhoto} className="img-fluid" alt="user listing" width="100%" height="140" />
							<div className="card-block-content">
								<div className="d-flex justify-content-between mb-20">
									<div className="d-flex align-items-start">
										<div className="media">
											<div className="media-left mx-10">
												<img src={user.userAvatar} alt="user profile" className="rounded-circle img-fluid" width="90" height="90" />
											</div>
											<div className="media-body py-10">
												<p className="mb-0">{user.userName}</p>
												<span className="text-muted fs-12"><i className="ti-world mr-5"></i>{user.location}</span>
											</div>
										</div>
									</div>
									<div className="d-flex align-items-end card-action pt-15">
										{(user.socialLinks.length > 0 && user.socialLinks !== null) && user.socialLinks.map((link, subkey) => (
											<a key={subkey} href={link.url} className="mr-0"><i className={`ti-${link.icon}`}></i></a>
										))}
									</div>
								</div>
								{user.isAvailable ?
									<div className="d-flex justify-content-between">
										<Button  color="primary" className="text-white btn-xs">
											<i className="zmdi zmdi-comment-outline mr-10"></i>Send Message
                    </Button>
										<Button className="text-success btn-xs"><i className="zmdi zmdi-check-circle mr-10"></i> Available for Hire</Button>
									</div>
									: <div className="d-flex justify-content-center">
										<Button className="text-secondary btn-xs"><i className="zmdi zmdi-circle mr-10"></i> Not Available for Hiring</Button>
									</div>
								}
							</div>
						</RctCard>
					))}
				</div>
			</div>
		);
	}
}
