import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsers, toggleIsFollowing } from '../../redux/usersReducer';
import Users from './Users';
import NumberPage from './NumberPage';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
               <NumberPage totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged} />
               {
                    this.props.isFetching 
                        ? <Preloader />  
                        : <Users users={this.props.users} 
                                 follow={this.props.follow} 
                                 unfollow={this.props.unfollow}
                                 isFollowing={this.props.isFollowing} />
                }
                </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
    }
}

export default connect(mapStateToProps, {follow, unfollow, toggleIsFollowing, getUsers})(UsersContainer);