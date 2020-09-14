import React from 'react';
import z from './Profile.module.css';
import avatar from './../../img/avatar.jpg';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="global_image" />
            </div>
            <div>
                <img src={avatar} alt="avatar" />
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;