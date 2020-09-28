import React from 'react';
import z from './Post.module.css';


const Post = (props) => {

    return (
        <div className={z.item}>
            <div className={z.avatar}>
                <img src="https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt="avatar"/>
                <span className={z.nickname}>
                    Gendalf
                </span> <br/>
                <span className={z.time}>
                    recently
                </span>
            </div>
            <div className={z.message}>
                {props.message}
            </div>
            <div className={z.cooperation}>
                {"like "}{props.likesCount}
            </div>
            
        </div>
    );
}

export default Post;