import React from 'react';
import z from './ProfileInfo.module.css';
import avatar from './../../../img/avatar.jpg';
import Preloader from '../../common/Preloader/Preloader';



const ProfileInfo = (props) => {
    
    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div className={z.content}>
            <div className={z.description}>
                <div className={z.nickname}>
                    {props.profile.fullName}
                </div>
                <div className={z.status}>
                    {props.profile.aboutMe}
                </div>
                <div className={z.info}>
                    Contact:
                    {props.profile.contacts.facebook && <span>{" " + props.profile.contacts.facebook},</span>}
                    {props.profile.contacts.website && <span>{" " + props.profile.contacts.website},</span>}
                    {props.profile.contacts.vk && <span>{" " + props.profile.contacts.vk},</span>}
                    {props.profile.contacts.twitter && <span>{" " + props.profile.contacts.twitter},</span>}
                    {props.profile.contacts.instagram && <span>{" " + props.profile.contacts.instagram},</span>}   
                    {props.profile.contacts.youtube && <span>{" " + props.profile.contacts.youtube},</span>}   
                    {props.profile.contacts.github && <span>{" " + props.profile.contacts.github},</span>}   
                    {props.profile.contacts.mainLink && <span>{" " + props.profile.contacts.maimLink},</span>}
                    {props.profile.lookingForAJob && <span><br/>{"lookingForAJob: " + props.profile.lookingForAJobDescription}</span>}   
                </div>
            </div>
            <div className={z.profile}>
                <img src={props.profile.photos.large} className={z.avatar} />
            </div>
        </div>
    );
}

export default ProfileInfo;