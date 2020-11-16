import React from 'react';
import { useEffect, useState } from 'react';
import z from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {!editMode &&
                <div className={z.status}>
                    <span onDoubleClick={ activateEditMode }>{props.status || "Write a status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={ onStatusChange } autoFocus={true} type="text" onBlur={ deactivateEditMode } value={status} />
                    <div className={z.status}>Max symbol: 300</div>
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;