/**
 * Horizontal Menu
 */
import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import IntlMessages from 'Util/IntlMessages';

import navLinks from './NavLinks';

import NavMenuItem from './NavMenuItem';

class HorizontalMenu extends Component {
    render() {
        return (
            <div className="horizontal-menu">
                <ul className="list-unstyled nav">
                    <li className="nav-item">
                        <NavLink to='' className="nav-link">
                            <i className="zmdi zmdi-view-dashboard"></i>
                            <span className="menu-title"><IntlMessages id="sidebar.DataCenter" /></span>
                        </NavLink>
                        <ul className="list-unstyled sub-menu">
                            {navLinks.category1.map((menu, key) => (
                                <NavMenuItem
                                    menu={menu}
                                    key={key}
                                />
                            ))}
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to='' className="nav-link">
                            <i className="zmdi zmdi-devices"></i>
                            <span className="menu-title"><IntlMessages id="sidebar.Devices" /></span>
                        </NavLink>
                        <ul className="list-unstyled sub-menu">
                            {navLinks.category2.map((menu, key) => (
                                <NavMenuItem
                                    menu={menu}
                                    key={key}
                                />
                            ))}
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to='' className="nav-link">
                            <i className="zmdi zmdi-wifi-alt"></i>
                            <span className="menu-title"><IntlMessages id="sidebar.Network" /></span>
                        </NavLink>
                        <ul className="list-unstyled sub-menu">
                            {navLinks.category3.map((menu, key) => (
                                <NavMenuItem
                                    menu={menu}
                                    key={key}
                                />
                            ))}
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to='' className="nav-link">
                            <i className="zmdi zmdi-apps"></i>
                            <span className="menu-title"><IntlMessages id="sidebar.Apps" /></span>
                        </NavLink>
                        <ul className="list-unstyled sub-menu">
                            {navLinks.category4.map((menu, key) => (
                                <NavMenuItem
                                    menu={menu}
                                    key={key}
                                />
                            ))}
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to='' className="nav-link">
                            <i className="zmdi zmdi-shield-check"></i>
                            <span className="menu-title"><IntlMessages id="sidebar.Secrets" /></span>
                        </NavLink>
                        <ul className="list-unstyled sub-menu">
                            {navLinks.category5.map((menu, key) => (
                                <NavMenuItem
                                    menu={menu}
                                    key={key}
                                />
                            ))}
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to='' className="nav-link">
                            <i className="zmdi zmdi-search-replace"></i>
                            <span className="menu-title"><IntlMessages id="sidebar.Discovery" /></span>
                        </NavLink>
                        <ul className="list-unstyled sub-menu">
                            {navLinks.category6.map((menu, key) => (
                                <NavMenuItem
                                    menu={menu}
                                    key={key}
                                />
                            ))}
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to='' className="nav-link">
                            <i className="zmdi zmdi-headset"></i>
                            <span className="menu-title"><IntlMessages id="sidebar.Reports" /></span>
                        </NavLink>
                        <ul className="list-unstyled sub-menu">
                            {navLinks.category7.map((menu, key) => (
                                <NavMenuItem
                                    menu={menu}
                                    key={key}
                                />
                            ))}
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to='' className="nav-link">
                            <i className="zmdi zmdi-wrench"></i>
                            <span className="menu-title"><IntlMessages id="sidebar.Tools" /></span>
                        </NavLink>
                        <ul className="list-unstyled sub-menu">
                            {navLinks.category8.map((menu, key) => (
                                <NavMenuItem
                                    menu={menu}
                                    key={key}
                                />
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default HorizontalMenu;
