import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { userAPI } from '../../api/api';


class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 11773;
        }
        userAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let withURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withURLDataContainerComponent );