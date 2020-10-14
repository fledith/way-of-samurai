import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, requestUsers, toggleIsFollowing } from '../../redux/usersReducer';
import Users from './Users';
import NumberPage from './NumberPage';
import { Preloader } from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getIsFollowing, getUsers } from '../../redux/usersSelectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
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

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowing: state.usersPage.isFollowing,
//     }
// }
const mapStateToProps = (state) => {
    return ({
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),    
    })
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, toggleIsFollowing, requestUsers}),
)(UsersContainer);