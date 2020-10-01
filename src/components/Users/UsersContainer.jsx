import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, toggleIsFollowing } from '../../redux/usersReducer';
import Users from './Users';
import NumberPage from './NumberPage';
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from '../../api/api';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
        });
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
                        : <Users users={this.props.users} follow={this.props.follow} toggleIsFollowing={this.props.toggleIsFollowing} isFollowing={this.props.isFollowing} />
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
        isFollowing: state.usersPage.isFollowing
    }
}

export default connect(mapStateToProps, {follow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowing})(UsersContainer);