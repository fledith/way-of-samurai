import React from 'react';
import z from './ProfileInfo.module.css';
import avatar from './../../../img/avatar.jpg';



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    );
}

export default ProfileInfo;