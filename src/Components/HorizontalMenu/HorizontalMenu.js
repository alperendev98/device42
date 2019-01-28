/**
 * Horizontal Menu
 */
import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import IntlMessages from 'Util/IntlMessages';

import NavMenuItem from './NavMenuItem';

import config from 'config';

class HorizontalMenu extends Component {
    render() {
        return (
            <div className="horizontal-menu">
                <ul className="list-unstyled nav">

                {
                    config.menus.map((mainmenu, key) => (
                        <li className="nav-item" key={key}>
                            <NavLink to='' className="nav-link">
                                <i className={mainmenu.icon}></i>
                                <span className="menu-title"><IntlMessages id={mainmenu.title} /></span>
                            </NavLink>
                            <ul className="list-unstyled sub-menu">
                                {mainmenu.submenus ? 
                                mainmenu.submenus.map((menu, key) => (
                                    <NavMenuItem
                                        menu={menu}
                                        key={key}
                                    />
                                )):
                                null}
                            </ul>
                        </li>
                    ))
                }
                </ul>
            </div>
        );
    }
}

export default HorizontalMenu;
