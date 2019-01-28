/**
 * Nav Menu Item
 */
import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import classnames from 'classnames';
import IntlMessages from 'Util/IntlMessages';

class NavMenuItem extends Component {

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        this.setState({ windowWidth: $(window).width() });
    }

    render() {
        const { menu } = this.props;
        return (
            <li className="nav-item">
                {menu.child_routes !== null ?
                    <Fragment>
                        <div className="nav-link">
                            <i className={menu.icon}></i>
                            <IntlMessages id={menu.title} />
                        </div>
                        <ul className={classnames("list-unstyled sub-menu-child", { 'deep-level': menu.child_routes.length > 10 })}>
                            {menu.child_routes.map((subMenu, subKey) => {
                                if (!subMenu.child_routes) {
                                    return (
                                        <li className='nav-item' key={subKey}>
                                            <NavLink to={subMenu.path} className="nav-link no-arrow" activeClassName="active">
                                                <IntlMessages id={subMenu.title} />
                                            </NavLink>
                                        </li>
                                    )
                                }
                                return (
                                    <li className='nav-item' key={subKey}>
                                        <div className="nav-link">
                                            <IntlMessages id={subMenu.title} />
                                        </div>
                                        <ul className="list-unstyled sub-menu-sub-child">
                                            {subMenu.child_routes.map((nestedMenu, nestedKey) => (
                                                <li className="nav-item" key={nestedKey}>
                                                    <NavLink to={nestedMenu.path} className="nav-link" activeClassName="active">
                                                        <IntlMessages id={nestedMenu.title} />
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                );
                            })}
                        </ul>
                    </Fragment> :
                    <NavLink to={menu.path} className="nav-link no-arrow">
                        <i className={menu.icon}></i>
                        <IntlMessages id={menu.title} />
                    </NavLink>
                }
            </li>
        );
    }
}

export default NavMenuItem;
