/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

// rct page loader
import RctPageLoader from 'Components/RctPageLoader/RctPageLoader';

const AsyncSettingComponent = Loadable({
	loader: () => import("Components/Setting"),
	loading: () => <RctPageLoader />,
});

const DataComponent = Loadable({
	loader: () => import("Container/DataContainer"),
	loading: () => <RctPageLoader />,
});

/*---------------- Session ------------------*/

// Session Lock Screen
const AsyncSessionLockScreenComponent = Loadable({
	loader: () => import("Routes/session/lock-screen"),
	loading: () => <RctPageLoader />,
});

// Session Forgot Password
const AsyncSessionForgotPasswordComponent = Loadable({
	loader: () => import("Routes/session/forgot-password"),
	loading: () => <RctPageLoader />,
});

// Session Page 404
const AsyncSessionPage404Component = Loadable({
	loader: () => import("Routes/session/404"),
	loading: () => <RctPageLoader />,
});

// Session Page 404
const AsyncSessionPage500Component = Loadable({
	loader: () => import("Routes/session/500"),
	loading: () => <RctPageLoader />,
});

// terms and condition
const AsyncTermsConditionComponent = Loadable({
	loader: () => import("Routes/pages/terms-condition"),
	loading: () => <RctPageLoader />,
});

export {
	AsyncSettingComponent,
	DataComponent,
	AsyncSessionLockScreenComponent,
	AsyncSessionForgotPasswordComponent,
	AsyncSessionPage404Component,
	AsyncSessionPage500Component,
	AsyncTermsConditionComponent,
};
