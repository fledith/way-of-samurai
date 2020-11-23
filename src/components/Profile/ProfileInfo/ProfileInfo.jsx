import React from 'react';
import z from './ProfileInfo.module.css';
import avatar2 from './../../../img/avatar2.png';
import { Preloader } from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



const ProfileInfo = (props) => {
    
    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div className={z.content}>
            <div className={z.profile}>
                {!props.profile.photos.large 
                ? <img src={avatar2} />
                : <img src={props.profile.photos.large} />}
            </div>
            <div className={z.description}>
                <div className={z.nickname}>
                    {props.profile.fullName}
                </div>
                <div className={z.status}>
                    <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
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
                    {props.profile.aboutMe && <span><br/>{"About Me: " + props.profile.aboutMe}</span>}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;