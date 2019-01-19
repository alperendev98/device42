/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

// rct page loader
import RctPageLoader from 'Components/RctPageLoader/RctPageLoader';

const DeviceComponent = Loadable({
	loader: () => import("Container/DeviceContainer"),
	loading: () => <RctPageLoader />,
});

const AsyncUserWidgetComponent = Loadable({
	loader: () => import("Routes/widgets/user-widgets"),
	loading: () => <RctPageLoader />,
});

const AsyncUserChartsComponent = Loadable({
	loader: () => import("Routes/widgets/charts-widgets"),
	loading: () => <RctPageLoader />,
});

const AsyncGeneralWidgetsComponent = Loadable({
	loader: () => import("Routes/widgets/general-widgets"),
	loading: () => <RctPageLoader />,
});

const AsyncPromoWidgetsComponent = Loadable({
	loader: () => import("Routes/widgets/promo-widgets"),
	loading: () => <RctPageLoader />,
});

// chat app
const AsyncChatComponent = Loadable({
	loader: () => import("Routes/chat"),
	loading: () => <RctPageLoader />,
});

// gallery
const AsyncGalleryComponent = Loadable({
	loader: () => import("Routes/pages/gallery"),
	loading: () => <RctPageLoader />,
});

// feedback
const AsyncFeedbackComponent = Loadable({
	loader: () => import("Routes/pages/feedback"),
	loading: () => <RctPageLoader />,
});

// report
const AsyncReportComponent = Loadable({
	loader: () => import("Routes/pages/report"),
	loading: () => <RctPageLoader />,
});

// faq
const AsyncFaqComponent = Loadable({
	loader: () => import("Routes/pages/faq"),
	loading: () => <RctPageLoader />,
});

// pricing
const AsyncPricingComponent = Loadable({
	loader: () => import("Routes/pages/pricing"),
	loading: () => <RctPageLoader />,
});

// blank
const AsyncBlankComponent = Loadable({
	loader: () => import("Routes/pages/blank"),
	loading: () => <RctPageLoader />,
});

// Basic Table
const AsyncBasicTableComponent = Loadable({
	loader: () => import("Routes/tables/basic"),
	loading: () => <RctPageLoader />,
});

// Basic Table
const AsyncDataTableComponent = Loadable({
	loader: () => import("Routes/tables/data-table"),
	loading: () => <RctPageLoader />,
});

// Responsive Table
const AsyncResponsiveTableComponent = Loadable({
	loader: () => import("Routes/tables/responsive"),
	loading: () => <RctPageLoader />,
});

// Users List
const AsyncUsersListComponent = Loadable({
	loader: () => import("Routes/users/user-list"),
	loading: () => <RctPageLoader />,
});

// Users Profile
const AsyncUserProfileComponent = Loadable({
	loader: () => import("Routes/users/user-profile"),
	loading: () => <RctPageLoader />,
});

// Users Profile 1
const AsyncUserProfile1Component = Loadable({
	loader: () => import("Routes/users/user-profile-1"),
	loading: () => <RctPageLoader />,
});

// Users Management
const AsyncUserManagementComponent = Loadable({
	loader: () => import("Routes/users/user-management"),
	loading: () => <RctPageLoader />,
});

/*--------------- Charts ----------------*/

// Re charts
const AsyncRechartsComponent = Loadable({
	loader: () => import("Routes/charts/recharts"),
	loading: () => <RctPageLoader />,
});

// ReactChartsjs2
const AsyncReactChartsjs2Component = Loadable({
	loader: () => import("Routes/charts/react-chartjs2"),
	loading: () => <RctPageLoader />,
});

/*---------------------- Calendar -----------*/

// Basic Calendar
const AsyncBasicCalendarComponent = Loadable({
	loader: () => import("Routes/calendar/BasicCalendar"),
	loading: () => <RctPageLoader />,
});

// Cultures Calendar
const AsyncCulturesComponent = Loadable({
	loader: () => import("Routes/calendar/Cultures"),
	loading: () => <RctPageLoader />,
});

// Dnd Calendar
const AsyncDndComponent = Loadable({
	loader: () => import("Routes/calendar/Dnd"),
	loading: () => <RctPageLoader />,
});

// Selectable Calendar
const AsyncSelectableComponent = Loadable({
	loader: () => import("Routes/calendar/Selectable"),
	loading: () => <RctPageLoader />,
});

// Custom Calendar
const AsyncCustomComponent = Loadable({
	loader: () => import("Routes/calendar/Custom"),
	loading: () => <RctPageLoader />,
});

/*---------------- Session ------------------*/

// Session Login
const AsyncSessionLoginComponent = Loadable({
	loader: () => import("Routes/session/login"),
	loading: () => <RctPageLoader />,
});

// Session Register
const AsyncSessionRegisterComponent = Loadable({
	loader: () => import("Routes/session/register"),
	loading: () => <RctPageLoader />,
});

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

/*------------- Form Elemets -------------*/

// forms elements
const AsyncFormElementsComponent = Loadable({
	loader: () => import("Routes/forms/form-elements"),
	loading: () => <RctPageLoader />,
});

// forms TextField
const AsyncTextFieldComponent = Loadable({
	loader: () => import("Routes/forms/material-text-field"),
	loading: () => <RctPageLoader />,
});

// forms TextField
const AsyncSelectListComponent = Loadable({
	loader: () => import("Routes/forms/select-list"),
	loading: () => <RctPageLoader />,
});

/*---------------- Advance UI Components -------------*/

// advance components DateAndTimePicker
const AsyncAdvanceUIDateAndTimePickerComponent = Loadable({
	loader: () => import("Routes/advance-ui-components/dateTime-picker"),
	loading: () => <RctPageLoader />,
});

// advance components Tabs
const AsyncAdvanceUITabsComponent = Loadable({
	loader: () => import("Routes/advance-ui-components/tabs"),
	loading: () => <RctPageLoader />,
});

// advance components Stepper
const AsyncAdvanceUIStepperComponent = Loadable({
	loader: () => import("Routes/advance-ui-components/stepper"),
	loading: () => <RctPageLoader />,
});

// advance components NotificationComponent
const AsyncAdvanceUINotificationComponent = Loadable({
	loader: () => import("Routes/advance-ui-components/notification"),
	loading: () => <RctPageLoader />,
});

// advance components SweetAlert
const AsyncAdvanceUISweetAlertComponent = Loadable({
	loader: () => import("Routes/advance-ui-components/sweet-alert"),
	loading: () => <RctPageLoader />,
});

// advance components autoComplete
const AsyncAdvanceUIAutoCompleteComponent = Loadable({
	loader: () => import("Routes/advance-ui-components/autoComplete"),
	loading: () => <RctPageLoader />,
});

export {
	DeviceComponent,
	AsyncUserWidgetComponent,
	AsyncUserChartsComponent,
	AsyncGeneralWidgetsComponent,
	AsyncPromoWidgetsComponent,
	AsyncChatComponent,
	AsyncGalleryComponent,
	AsyncFeedbackComponent,
	AsyncReportComponent,
	AsyncFaqComponent,
	AsyncPricingComponent,
	AsyncBlankComponent,
	AsyncBasicTableComponent,
	AsyncDataTableComponent,
	AsyncResponsiveTableComponent,
	AsyncUsersListComponent,
	AsyncUserProfileComponent,
	AsyncUserProfile1Component,
	AsyncUserManagementComponent,
	AsyncRechartsComponent,
	AsyncReactChartsjs2Component,
	AsyncBasicCalendarComponent,
	AsyncCulturesComponent,
	AsyncDndComponent,
	AsyncSelectableComponent,
	AsyncCustomComponent,
	AsyncSessionLoginComponent,
	AsyncSessionRegisterComponent,
	AsyncSessionLockScreenComponent,
	AsyncSessionForgotPasswordComponent,
	AsyncSessionPage404Component,
	AsyncSessionPage500Component,
	AsyncTermsConditionComponent,
	AsyncFormElementsComponent,
	AsyncTextFieldComponent,
	AsyncSelectListComponent,
	AsyncAdvanceUIDateAndTimePickerComponent,
	AsyncAdvanceUITabsComponent,
	AsyncAdvanceUIStepperComponent,
	AsyncAdvanceUINotificationComponent,
	AsyncAdvanceUISweetAlertComponent,
	AsyncAdvanceUIAutoCompleteComponent,
};
