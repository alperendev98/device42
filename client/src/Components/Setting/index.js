/**
 * Instance Management Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Button from '@material-ui/core/Button';
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { NotificationManager } from 'react-notifications';

// delete confirmation dialog
import DeleteConfirmationDialog from 'Components/DeleteConfirmationDialog/DeleteConfirmationDialog';

// add new instance form
import AddNewInstanceForm from './AddNewInstanceForm';

// update instance form
import UpdateInstanceForm from './UpdateInstanceForm';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// rct section loader
import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';

export default class Setting extends Component {

	state = {
		all: false,
		selectedInstance: null, // selected instance to perform operations
		loading: false, // loading activity
		addNewInstanceModal: false, // add new instance form modal
		addNewInstanceDetail: {
			name: '',
			address: '',
			username: '',
			password: '',
		},
		openViewInstanceDialog: false, // view instance dialog box
		editInstance: null,
		allSelected: false,
		selectedInstances: 0
	}

	componentDidMount() {
		this.props.loadInstances()
	}

	/**
	 * On Delete
	 */
	onDelete(data) {
		this.refs.deleteConfirmationDialog.open();
		this.setState({ selectedInstance: data });
	}

	/**
	 * Delete Instance Permanently
	 */
	deleteInstancePermanently() {
		const { selectedInstance } = this.state;
		this.props.deleteInstance(selectedInstance.instance_id)
	}

	/**
	 * Open Add New Instance Modal
	 */
	opnAddNewInstanceModal() {
		this.setState({ addNewInstanceModal: true });
	}

	/**
	 * On Reload
	 */
	onReload() {
		this.setState({ loading: true });
		let self = this;
		setTimeout(() => {
			self.setState({ loading: false });
		}, 1000);
	}

	/**
	 * On Select Instance
	 */
	onSelectInstance(instance) {
		instance.checked = !instance.checked;
		let selectedInstances = 0;
		let instances = this.state.instances.map(instanceData => {
			if (instanceData.checked) {
				selectedInstances++;
			}
			if (instanceData.id === instance.id) {
				if (instanceData.checked) {
					selectedInstances++;
				}
				return instance;
			} else {
				return instanceData;
			}
		});
		this.setState({ instances, selectedInstances });
	}

	/**
	 * On Change Add New Instance Details
	 */
	onChangeAddNewInstanceDetails(key, value) {
		this.setState({
			addNewInstanceDetail: {
				...this.state.addNewInstanceDetail,
				[key]: value
			}
		});
	}

	/**
	 * Add New Instance
	 */
	addNewInstance() {
		const { name, address, username, password } = this.state.addNewInstanceDetail;
		if (name !== '' && address !== '' && username !== '' && password !== '') {
			this.props.addNewInstance(this.state.addNewInstanceDetail)
			this.setState({ addNewInstanceModal: false });
		}
	}

	/**
	 * View Instance Detail Hanlder
	 */
	viewInstanceDetail(data) {
		this.setState({ openViewInstanceDialog: true, selectedInstance: data });
	}

	/**
	 * On Edit Instance
	 */
	oneditInstance(instance) {
		this.setState({ addNewInstanceModal: true, editInstance: instance });
	}

	/**
	 * On Add & Update Instance Modal Close
	 */
	onAddUpdateIntanceModalClose() {
		this.setState({ addNewInstanceModal: false, editInstance: null })
	}

	/**
	 * On Update Instance Details
	 */
	onUpdateInstanceDetails(key, value) {
		this.setState({
			editInstance: {
				...this.state.editInstance,
				[key]: value
			}
		});
	}

	/**
	 * Update Instance
	 */
	updateInstance() {
		const { editInstance } = this.state;
		let indexOfUpdateInstance = '';
		let instances = this.state.instances;
		for (let i = 0; i < instances.length; i++) {
			const instance = instances[i];
			if (instance.id === editInstance.id) {
				indexOfUpdateInstance = i
			}
		}
		instances[indexOfUpdateInstance] = editInstance;
		this.setState({ loading: true, editInstance: null, addNewInstanceModal: false });
		let self = this;
		setTimeout(() => {
			self.setState({ instances, loading: false }, localStorage.setItem('instances', JSON.stringify(instances)));
			NotificationManager.success('Instance Updated!');
		}, 1000);
	}

	//Select All instance
	onSelectAllInstance(e) {
		const { selectedInstances, instances } = this.state;
		let selectAll = selectedInstances < instances.length;
		if (selectAll) {
			let selectAllInstances = instances.map(instance => {
				instance.checked = true
				return instance
			});
			this.setState({ instances: selectAllInstances, selectedinstances: selectAllInstances.length })
		} else {
			let unselectedInstances = instances.map(instance => {
				instance.checked = false
				return instance;
			});
			this.setState({ selectedInstances: 0, instances: unselectedInstances });
		}
	}

	render() {
		const { loading, selectedInstance, editInstance } = this.state;
		const { instances } = this.props
		return (
			<div className="user-management">
				<Helmet>
					<title>Device42 | Settings </title>
					<meta name="description" content="Device42 Settings" />
				</Helmet>
				<PageTitleBar
					title={<IntlMessages id="dashboard.Setting" />}
					match={this.props.match}
				/>
				<RctCollapsibleCard fullBlock>
					<div className="table-responsive">
						<div className="d-flex justify-content-between py-20 px-10 border-bottom">
							<div>
								<div onClick={() => this.onReload()} className="btn-outline-default mr-10"><i className="ti-reload"></i></div>								
							</div>
							<div>
								<button onClick={() => this.opnAddNewInstanceModal()} color="primary" className="caret btn-sm mr-10"><IntlMessages id="common.addNewInstance" /> <i className="zmdi zmdi-plus"></i></button>
							</div>
						</div>
						<table className="table table-middle table-hover mb-0">
							<thead>
								<tr>
									<th><IntlMessages id="common.name" /></th>
									<th><IntlMessages id="common.address" /></th>
									<th><IntlMessages id="common.username" /></th>
									<th><IntlMessages id="common.password" /></th>
									<th><IntlMessages id="common.Action" /></th>
								</tr>
							</thead>
							<tbody>
								{instances && instances.map((instance, key) => (
									<tr key={key}>
										
										<td>{instance.name}</td>
										<td>{instance.server_url}</td>
										<td>{instance.username}</td>
										<td>{instance.password}</td>
										
										<td className="list-action">
											{/* <div onClick={() => this.oneditInstance(instance)}><i className="ti-pencil"></i></div> */}
											<div onClick={() => this.onDelete(instance)}><i className="ti-close"></i></div>
										</td>
									</tr>
								))}
							</tbody>
							<tfoot className="border-top">
								
							</tfoot>
						</table>
					</div>
					{loading &&
						<RctSectionLoader />
					}
				</RctCollapsibleCard>
				<DeleteConfirmationDialog
					ref="deleteConfirmationDialog"
					title="Are You Sure Want To Delete?"
					message="This will delete instance permanently."
					onConfirm={() => this.deleteInstancePermanently()}
				/>
				<Modal isOpen={this.state.addNewInstanceModal} toggle={() => this.onAddUpdateIntanceModalClose()}>
					<ModalHeader toggle={() => this.onAddUpdateIntanceModalClose()}>
						{editInstance === null ?
							'Add New Instance' : 'Update Instance'
						}
					</ModalHeader>
					<ModalBody>
						{editInstance === null ?
							<AddNewInstanceForm
								addNewInstanceDetails={this.state.addNewInstanceDetail}
								onChangeAddNewInstanceDetails={this.onChangeAddNewInstanceDetails.bind(this)}
							/>
							: <UpdateInstanceForm instance={editInstance} onUpdateInstanceDetail={this.onUpdateInstanceDetails.bind(this)} />
						}
					</ModalBody>
					<ModalFooter>
						{editInstance === null ?
							<Button  className="text-white btn-success" onClick={() => this.addNewInstance()}>Add</Button>
							: <Button  color="primary" className="text-white btn-success" onClick={() => this.updateInstance()}>Update</Button>
						}
						{' '}
						<Button  className="text-white btn-danger" onClick={() => this.onAddUpdateIntanceModalClose()}>Cancel</Button>
					</ModalFooter>
				</Modal>
				<Dialog
					onClose={() => this.setState({ openViewInstanceDialog: false })}
					open={this.state.openViewInstanceDialog}
				>
					<DialogContent>
						{selectedInstance !== null &&
							<div>
								<div className="clearfix d-flex">
									<div className="media pull-left">
										<img src={selectedInstance.avatar} alt="user prof" className="rounded-circle mr-15" width="50" height="50" />
										<div className="media-body">
											<p>Name: <span className="fw-bold">{selectedInstance.name}</span></p>
											<p>Address: <span className="fw-bold">{selectedInstance.emailAddress}</span></p>
											<p>Instancename: <span className="badge badge-warning">{selectedInstance.type}</span></p>
											<p>Password: <span className={`badge ${selectedInstance.badgeClass} badge-pill`}>{selectedInstance.accountType}</span></p>
										</div>
									</div>
								</div>
							</div>
						}
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}
