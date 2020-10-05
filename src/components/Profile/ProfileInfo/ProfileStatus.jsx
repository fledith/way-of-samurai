import React from 'react';
import z from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render(){
        return (
            <>
                {!this.state.editMode &&
                    <div className={z.status}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "Write a status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={ this.onStatusChange } autoFocus={true} onBlur={ this.deactivateEditMode } type="text" value={this.state.status} />
                        <div className={z.status}>Max symbol: 300</div>
                    </div>
                }
            </>
    )}
}

export default ProfileStatus;