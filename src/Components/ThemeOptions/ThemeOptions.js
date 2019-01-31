/**
 * Theme Options
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

// redux actions
import {
    toggleSidebarImage,
    setSidebarBgImageAction,
    miniSidebarAction,
    darkModeAction,
    boxLayoutAction,
    rtlLayoutAction,
    changeThemeColor,
    toggleDarkSidebar
} from 'Actions';

class ThemeOptions extends Component {

    state = {
        switched: false,
        themeOptionPanelOpen: false
    }

    componentDidMount() {
        const { darkMode, boxLayout, rtlLayout, miniSidebar } = this.props;
        if (darkMode) {
            this.darkModeHanlder(true);
        }
        if (boxLayout) {
            this.boxLayoutHanlder(true);
        }
        if (rtlLayout) {
            this.rtlLayoutHanlder(true);
        }
        if (miniSidebar) {
            this.miniSidebarHanlder(true);
        }
    }

    /**
     * Set Sidebar Background Image
     */
    setSidebarBgImage(sidebarImage) {
        this.props.setSidebarBgImageAction(sidebarImage);
    }

    /**
     * Function To Toggle Theme Option Panel
     */
    toggleThemePanel() {
        this.setState({
            themeOptionPanelOpen: !this.state.themeOptionPanelOpen
        });
    }

    /**
     * Mini Sidebar Event Handler
    */
    miniSidebarHanlder(isTrue) {
        if (isTrue) {
            $('body').addClass('mini-sidebar');
        } else {
            $('body').removeClass('mini-sidebar');
        }
        setTimeout(() => {
            this.props.miniSidebarAction(isTrue);
        }, 100)
    }

    /**
     * Dark Mode Event Hanlder
     * Use To Enable Dark Mode
     * @param {*object} event
    */
    darkModeHanlder(isTrue) {
        if (isTrue) {
            $('body').addClass('dark-mode');
        } else {
            $('body').removeClass('dark-mode');
        }
        this.props.darkModeAction(isTrue);
    }

    /**
     * Box Layout Event Hanlder
     * Use To Enable Boxed Layout
     * @param {*object} event
    */
    boxLayoutHanlder(isTrue) {
        if (isTrue) {
            $('body').addClass('boxed-layout');
        } else {
            $('body').removeClass('boxed-layout');
        }
        this.props.boxLayoutAction(isTrue);
    }

    /**
     * Rtl Layout Event Hanlder
     * Use to Enable rtl Layout
     * @param {*object} event
    */
    rtlLayoutHanlder(isTrue) {
        if (isTrue) {
            $("html").attr("dir", "rtl");
            $('body').addClass('rtl');
        } else {
            $("html").attr("dir", "ltr")
            $('body').removeClass('rtl');
        }
        this.props.rtlLayoutAction(isTrue);
    }

    /**
     * Change Theme Color Event Handler
     * @param {*object} theme 
     */
    changeThemeColor(theme) {
        const { themes } = this.props;
        for (const appTheme of themes) {
            if ($('body').hasClass(`theme-${appTheme.name}`)) {
                $('body').removeClass(`theme-${appTheme.name}`);
            }
        }
        $('body').addClass(`theme-${theme.name}`);
        this.darkModeHanlder(false);
        this.props.changeThemeColor(theme);
    }

    render() {
        return (
            <div className="fixed-plugin">
                
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ settings }) => {
    return settings;
};

export default connect(mapStateToProps, {
    toggleSidebarImage,
    setSidebarBgImageAction,
    miniSidebarAction,
    darkModeAction,
    boxLayoutAction,
    rtlLayoutAction,
    changeThemeColor,
    toggleDarkSidebar
})(ThemeOptions);
