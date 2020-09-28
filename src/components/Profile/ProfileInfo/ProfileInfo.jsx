import React from 'react';
import z from './ProfileInfo.module.css';
import avatar from './../../../img/avatar.jpg';



const ProfileInfo = () => {
    return (
        <div className={z.content}>
            <div className={z.description}>
                <div className={z.nickname}>
                    Gendalf
                </div>
                <div className={z.status}>
                    Who cares? I'm fabulous...
                </div>
                <div className={z.info}>
                    Age: 23 y.o. <br/>
                    Location: Zhytomyr, Ukraine <br/>
                    ... <br/>
                </div>
            </div>
            <div className={z.profile}>
                <img src={avatar} className={z.avatar} />
            </div>
        </div>
    );
}

export default ProfileInfo;