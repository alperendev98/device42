/**
 * Agency Menu
 */
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import $ from 'jquery';
import Drawer from '@material-ui/core/Drawer';
import { withRouter } from 'react-router-dom';

//Intl Meassages
import IntlMessages from 'Util/IntlMessages';

import navLinks from './NavLinks';
import NavMenuItem from './NavMenuItem';
import Sidebar from 'Components/Sidebar';

//Component
import SearchForm from 'Components/Header/SearchForm';
import MobileSearchForm from 'Components/Header/MobileSearchForm';

class AgencyMenu extends Component {

   state = {
      isMobileSearchFormVisible: false,
      mobileMenu: false
   }

   componentDidMount() {
      $('.agency-menu .nav > .nav-item').children().click(function (e) {
         $(this).parent().addClass('nav-item-active');
         if ($('.agency-menu .nav > .nav-item').hasClass('nav-item-active')) {
            $('.agency-menu .nav > .nav-item').removeClass('nav-item-active');
            $(this).parent().addClass('nav-item-active');
         }
      });
      $('.agency-menu .nav .nav-item .active').parents('.agency-menu .nav > .nav-item').addClass('nav-item-active');
   }

   // mobile search form
   openMobileSearchForm() {
      this.setState({ isMobileSearchFormVisible: true });
   }

   render() {
      const { isMobileSearchFormVisible, mobileMenu } = this.state;
      return (
         <div className="horizontal-menu agency-menu justify-content-between align-items-center">
            <ul className="list-unstyled nav">
               <li className="nav-item">
                  <div  className="nav-link">
                     <i className="zmdi zmdi-view-dashboard"></i>
                     <span className="menu-title"><IntlMessages id="sidebar.general" /></span>
                     <span className="arrow-icon"></span>
                  </div>
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
                  <div  className="nav-link">
                     <i className="zmdi zmdi-widgets"></i>
                     <span className="menu-title"><IntlMessages id="sidebar.modules" /></span>
                  </div>
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
                  <div  className="nav-link">
                     <i className="zmdi zmdi-view-carousel"></i>
                     <span className="menu-title"><IntlMessages id="sidebar.component" /></span>
                  </div>
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
                  <div  className="nav-link">
                     <i className="zmdi zmdi-wrench"></i>
                     <span className="menu-title"><IntlMessages id="sidebar.features" /></span>
                  </div>
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
                  <div  className="nav-link">
                     <i className="zmdi zmdi-assignment-check"></i>
                     <span className="menu-title"><IntlMessages id="sidebar.applications" /></span>
                  </div>
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
                  <div  className="nav-link">
                     <i className="zmdi zmdi-assignment-check"></i>
                     <span className="menu-title"><IntlMessages id="sidebar.extensions" /></span>
                  </div>
                  <ul className="list-unstyled sub-menu">
                     {navLinks.category6.map((menu, key) => (
                        <NavMenuItem
                           menu={menu}
                           key={key}
                        />
                     ))}
                  </ul>
               </li>
            </ul>
            <IconButton className="hamburger-icon" color="inherit" aria-label="Menu" onClick={() => this.setState({ mobileMenu: true })}>
               <MenuIcon />
            </IconButton>
            <div className="search-icon">
               <SearchForm />
               <IconButton mini="true" className="search-icon-btn" onClick={() => this.openMobileSearchForm()}>
                  <i className="zmdi zmdi-search"></i>
               </IconButton>
               <MobileSearchForm
                  isOpen={isMobileSearchFormVisible}
                  onClose={() => this.setState({ isMobileSearchFormVisible: false })}
               />
               <Drawer open={mobileMenu} onClose={() => this.setState({ mobileMenu: false })}>
                  <Sidebar agencySidebar />
               </Drawer>
            </div>
         </div>
      );
   }
}
export default withRouter(AgencyMenu);