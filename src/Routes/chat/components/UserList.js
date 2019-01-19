/**
 * User List
 */
import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { withRouter } from 'react-router-dom';

// app layouts
import { getAppLayout } from 'Helpers/helpers';

// components
import RecentChatUsers from './RecentChatUsers';

// redux actions
import {
    chatWithSelectedUser,
    updateUsersSearch,
    onSearchUsers
} from 'Actions';

class UserList extends Component {

    /**
     * Swicth Chat With User
     * @param {*object} user
     */
    switchChatWithUser(user) {
        this.props.chatWithSelectedUser(user);
    }

    /**
     * On Search Chat Users
     */
    updateSearch(e) {
        this.props.updateUsersSearch(e.target.value);
        this.props.onSearchUsers(e.target.value);
    }

    getScrollHeight() {
        const { location } = this.props;
        const appLayout = getAppLayout(location)
        switch (appLayout) {
            case 'app':
                return 'calc(100vh - 188px)';
            case 'agency':
                return 'calc(100vh - 372px)';
            case 'boxed':
                return 'calc(100vh - 372px)';
            case 'horizontal':
                return 'calc(100vh - 238px)';
            default:
                break;
        }
    }

    render() {
        const { searchUsers } = this.props;
        return (
            <div>
                <div className="search-wrapper mb-0 position-relative">
                    <Input
                        type="text"
                        name="search-users"
                        id="search"
                        className="search-input rounded-0 py-2 px-3"
                        placeholder="Search"
                        onChange={(e) => this.updateSearch(e)}
                        value={searchUsers}
                    />
                    <i className="zmdi zmdi-search search-icon"></i>
                </div>
                <div className="chat-list">
                    <Scrollbars
                        className="rct-scroll"
                        autoHide
                        style={{ height: this.getScrollHeight() }}
                    >
                        <RecentChatUsers />
                    </Scrollbars>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ chatAppReducer }) => {
    return chatAppReducer;
};

export default withRouter(connect(mapStateToProps, {
    chatWithSelectedUser,
    updateUsersSearch,
    onSearchUsers
})(UserList));
