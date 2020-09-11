import React from 'react';
import './../App.css';
import avatar from './../img/avatar.jpg';


const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="global_image" />
            </div>
            <div>
                <img src={avatar} alt="avatar" />
            </div>
            <div>
                My post
                <div>
                    New post
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;