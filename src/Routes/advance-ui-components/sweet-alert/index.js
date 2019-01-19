/**
 * Sweet Alert Advance Ui Components
 */
import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert'
import Button from '@material-ui/core/Button';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// intl messages
import IntlMessages from 'Util/IntlMessages';

export default class SweetAlertComponent extends Component {

	state = {
		basic: false,
		withDes: false,
		success: false,
		warning: false,
		customIcon: false,
		withHtml: false,
		prompt: false,
		passwordPrompt: false,
		customStyle: false
	}

	/**
	 * On Confirm dialog
	 * @param {string} key
	 */
	onConfirm(key) {
		this.setState({ [key]: false })
	}

	/**
	 * Open Alert
	 * @param {key} key
	 */
	openAlert(key) {
		this.setState({ [key]: true });
	}

	/**
	 * On Cancel dialog
	 * @param {string} key
	 */
	onCancel(key) {
		this.setState({ [key]: false })
	}

	render() {
		const { basic, withDes, success, warning, customIcon, withHtml, prompt, passwordPrompt, customStyle } = this.state;
		return (
			<div className="sweet-alert-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.sweetAlert" />} match={this.props.match} />
				<div className="row">
					<RctCollapsibleCard
						customClasses="p-20 text-center"
						colClasses="col-sm-6 col-lg-4 col-xl-3"
					>
						<h5 className="mb-20">Basic Alert</h5>
						<Button
							
							color="primary"
							className="text-white"
							onClick={() => this.openAlert('basic')}
						>
							Basic
					</Button>
					</RctCollapsibleCard>
					<RctCollapsibleCard
						customClasses="p-20 text-center"
						colClasses="col-sm-6 col-lg-4 col-xl-3"
					>
						<h5 className="mb-20">Description Alert</h5>
						<Button
							
							color="primary"
							className="text-white"
							onClick={() => this.openAlert('withDes')}
						>
							With Description
						</Button>
					</RctCollapsibleCard>
					<RctCollapsibleCard
						customClasses="p-20 text-center"
						colClasses="col-sm-6 col-lg-4 col-xl-3"
					>
						<h5 className="mb-20">Success Alert</h5>
						<Button
							
							color="primary"
							className="text-white"
							onClick={() => this.openAlert('success')}
						>
							Success
						</Button>
					</RctCollapsibleCard>
					<RctCollapsibleCard
						customClasses="p-20 text-center"
						colClasses="col-sm-6 col-lg-4 col-xl-3"
					>
						<h5 className="mb-20">Warning Alert</h5>
						<Button
							
							color="primary"
							className="text-white"
							onClick={() => this.openAlert('warning')}
						>
							Warning
						</Button>
					</RctCollapsibleCard>
					<RctCollapsibleCard
						customClasses="p-20 text-center"
						colClasses="col-sm-6 col-lg-4 col-xl-3"
					>
						<h5 className="mb-20">Custom Icon Alert</h5>
						<Button
							
							color="primary"
							className="text-white"
							onClick={() => this.openAlert('customIcon')}
						>
							Custom Icon
						</Button>
					</RctCollapsibleCard>
					<RctCollapsibleCard
						customClasses="p-20 text-center"
						colClasses="col-sm-6 col-lg-4 col-xl-3"
					>
						<h5 className="mb-20">With Html Alert</h5>
						<Button
							
							color="primary"
							className="text-white"
							onClick={() => this.openAlert('withHtml')}
						>
							With Html
						</Button>
					</RctCollapsibleCard>
					<RctCollapsibleCard
						customClasses="p-20 text-center"
						colClasses="col-sm-6 col-lg-4 col-xl-3"
					>
						<h5 className="mb-20">Prompt Alert</h5>
						<Button
							
							color="primary"
							className="text-white"
							onClick={() => this.openAlert('prompt')}
						>
							Prompt
						</Button>
					</RctCollapsibleCard>
					<RctCollapsibleCard
						customClasses="p-20 text-center"
						colClasses="col-sm-6 col-lg-4 col-xl-3"
					>
						<h5 className="mb-20">Password Prompt Alert</h5>
						<Button
							
							color="primary"
							className="text-white"
							onClick={() => this.openAlert('passwordPrompt')}
						>
							Password Prompt
						</Button>
					</RctCollapsibleCard>
					<RctCollapsibleCard
						customClasses="p-20 text-center"
						colClasses="col-sm-6 col-lg-4 col-xl-3"
					>
						<h5 className="mb-20">Custom Style Alert</h5>
						<Button
							
							color="primary"
							className="text-white"
							onClick={() => this.openAlert('customStyle')}
						>
							Custom Style
						</Button>
					</RctCollapsibleCard>
				</div>
				<SweetAlert
					show={basic}
					title="Here's a message!"
					onConfirm={() => this.onConfirm('basic')}
					btnSize="sm"
				/>
				<SweetAlert
					show={withDes}
					title="Here's a message!"
					btnSize="sm"
					onConfirm={() => this.onConfirm('withDes')}
				>
					It's pretty, isn't it?
        		</SweetAlert>
				<SweetAlert
					success
					show={success}
					title="Good job!"
					btnSize="sm"
					onConfirm={() => this.onConfirm('success')}>
					You clicked the button!
        		</SweetAlert>
				<SweetAlert
					warning
					btnSize="sm"
					show={warning}
					showCancel
					confirmBtnText="Yes, delete it!"
					confirmBtnBsStyle="danger"
					cancelBtnBsStyle="success"
					title="Are you sure?"
					onConfirm={() => this.onConfirm('warning')}
					onCancel={() => this.onCancel('warning')}
				>
					You will not be able to recover this imaginary file!
        		</SweetAlert>
				<SweetAlert
					custom
					btnSize="sm"
					show={customIcon}
					showCancel
					confirmBtnText="Yes"
					cancelBtnText="No"
					confirmBtnBsStyle="primary"
					cancelBtnBsStyle="warning"
					customIcon={require('assets/avatars/user-1.jpg')}
					title="Do you like thumbs?"
					onConfirm={() => this.onConfirm('customIcon')}
					onCancel={() => this.onCancel('customIcon')}
				>
					You will find they are up!
        		</SweetAlert>
				<SweetAlert
					show={withHtml}
					btnSize="sm"
					title={<span>HTML <small>Title</small>!</span>}
					onConfirm={() => this.onConfirm('withHtml')}
				>
					<span>A custom <span style={{ color: '#642aff' }}>html</span> message.</span>
				</SweetAlert>
				<SweetAlert
					input
					btnSize="sm"
					show={prompt}
					showCancel
					cancelBtnBsStyle="danger"
					title="An input!"
					placeHolder="Write something"
					onConfirm={() => this.onConfirm('prompt')}
					onCancel={() => this.onCancel('prompt')}
				>
					Write something interesting:
        		</SweetAlert>
				<SweetAlert
					input
					btnSize="sm"
					show={passwordPrompt}
					inputType="password"
					title="Enter Password"
					required
					validationMsg="You must enter your password!"
					onConfirm={() => this.onConfirm('passwordPrompt')}
				/>
				<SweetAlert
					show={customStyle}
					btnSize="sm"
					style={{ backgroundColor: 'blueviolet', color: 'white' }}
					title="Yay!"
					onConfirm={() => this.onConfirm('customStyle')}
					confirmBtnBsStyle="danger"
				>
					Its blueviolet!
        		</SweetAlert>
			</div>
		);
	}
}
