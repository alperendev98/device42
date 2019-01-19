/**
 * Sidebar Content
 */
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import IntlMessages from 'Util/IntlMessages';

import AgencySidebarMenuItem from './AgencySidebarMenuItem';

// redux actions
import { onToggleAgencyMenu } from 'Actions';

class AgencySidebar extends Component {

   toggleMenu(menu, stateCategory) {
      let data = {
         menu,
         stateCategory
      }
      this.props.onToggleAgencyMenu(data);
   }

   render() {
      const { agencySidebarMenu } = this.props.sidebar;
      return (
         <div className="rct-sidebar-nav">
            <nav className="navigation">
               <List
                  className="rct-mainMenu p-0 m-0 list-unstyled"
                  subheader={
                     <ListSubheader className="side-title" component="li">
                        <IntlMessages id="sidebar.general" />
                     </ListSubheader>}
               >
                  {agencySidebarMenu.category1.map((menu, key) => (
                     <AgencySidebarMenuItem
                        menu={menu}
                        key={key}
                        onToggleAgencyMenu={() => this.toggleMenu(menu, 'category1')}
                     />
                  ))}
               </List>
               <List
                  className="rct-mainMenu p-0 m-0 list-unstyled"
                  subheader={<ListSubheader className="side-title" component="li"><IntlMessages id="sidebar.modules" /></ListSubheader>}
               >
                  {agencySidebarMenu.category2.map((menu, key) => (
                     <AgencySidebarMenuItem
                        menu={menu}
                        key={key}
                        onToggleAgencyMenu={() => this.toggleMenu(menu, 'category2')}
                     />
                  ))}
               </List>
               <List
                  className="rct-mainMenu p-0 m-0 list-unstyled"
                  subheader={<ListSubheader className="side-title" component="li"><IntlMessages id="sidebar.component" /></ListSubheader>}
               >
                  {agencySidebarMenu.category3.map((menu, key) => (
                     <AgencySidebarMenuItem
                        menu={menu}
                        key={key}
                        onToggleAgencyMenu={() => this.toggleMenu(menu, 'category3')}
                     />
                  ))}
               </List>
               <List
                  className="rct-mainMenu p-0 m-0 list-unstyled"
                  subheader={<ListSubheader className="side-title" component="li"><IntlMessages id="sidebar.features" /></ListSubheader>}
               >
                  {agencySidebarMenu.category4.map((menu, key) => (
                     <AgencySidebarMenuItem
                        menu={menu}
                        key={key}
                        onToggleAgencyMenu={() => this.toggleMenu(menu, 'category4')}
                     />
                  ))}
               </List>
               <List
                  className="rct-mainMenu p-0 m-0 list-unstyled"
                  subheader={<ListSubheader className="side-title" component="li"><IntlMessages id="sidebar.applications" /></ListSubheader>}
               >
                  {agencySidebarMenu.category5.map((menu, key) => (
                     <AgencySidebarMenuItem
                        menu={menu}
                        key={key}
                        onToggleAgencyMenu={() => this.toggleMenu(menu, 'category5')}
                     />
                  ))}
					</List>
					<List
						className="rct-mainMenu p-0 m-0 list-unstyled"
						subheader={<ListSubheader className="side-title" component="li"><IntlMessages id="sidebar.applications" /></ListSubheader>}
					>
						{agencySidebarMenu.category6.map((menu, key) => (
							<AgencySidebarMenuItem
								menu={menu}
								key={key}
								onToggleAgencyMenu={() => this.toggleMenu(menu, 'category5')}
							/>
						))}
					</List>
            </nav>
         </div>
      );
   }
}

// map state to props
const mapStateToProps = ({ sidebar }) => {
   return { sidebar };
};

export default withRouter(connect(mapStateToProps, {
   onToggleAgencyMenu
})(AgencySidebar));
