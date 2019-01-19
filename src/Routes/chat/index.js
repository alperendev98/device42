/**
* Chat
*/
import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
// components
import ChatArea from './components/ChatArea';
import ChatSidebar from './components/ChatSidebar';

const drawerWidth = 310;

const styles = theme => ({
	root: {
		flexGrow: 1,
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%',
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: 230,
		[theme.breakpoints.up('md')]: {
			position: 'relative',
			width: drawerWidth
		},
		backgroundColor: '#fff'
	},
	content: {
		flexGrow: 1
	},
});

class ChatList extends Component {

	state = {
		mobileOpen: false,
	};

	handleDrawerToggle = () => {
		this.setState({ mobileOpen: !this.state.mobileOpen });
	}

	render() {
		const { classes, theme } = this.props;
		const drawer = <ChatSidebar />
		return (
			<div className="chat-wrapper">
				<Helmet>
					<title>Chat App</title>
					<meta name="description" content="Device42 Chat App" />
				</Helmet>
				<div className={classes.root}>
					<Hidden mdUp className="user-list-wrap">
						<Drawer
							
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={this.state.mobileOpen}
							onClose={this.handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper,
							}}
							ModalProps={{
								keepMounted: true,
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden smDown implementation="css" className="user-list-wrap">
						<Drawer
							
							open
							classes={{
								paper: classes.drawerPaper,
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<div className={`chat-content ${classes.content}`}>
						<ChatArea onMenuIconPress={this.handleDrawerToggle} />
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(ChatList);
