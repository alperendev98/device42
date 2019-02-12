/**
* Main App
*/
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import { history } from './history'
// css
import 'Lib/reactifyCss';

// app component
import App from 'Container/App';

import { configureStore } from './store';

const MainApp = () => (
	<Provider store={configureStore()}>
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<Router history={history}>
				<Switch>
					<Route path="/" component={App} />
				</Switch>
			</Router>
		</MuiPickersUtilsProvider>
	</Provider>
);

export default MainApp;
