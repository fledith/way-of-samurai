import React from 'react';
import z from './ProfileInfo.module.css';
import avatar from './../../../img/avatar.jpg';



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://habrastorage.org/webt/y7/rx/av/y7rxavmwlct3n-bqq-fshqjv_ig.jpeg" alt="global_image" />
            </div>
            <div>
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    );
}

export default ProfileInfo;