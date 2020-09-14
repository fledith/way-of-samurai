import React from 'react';
import z from './Post.module.css';


const Post = (props) => {

    return (
                <div className={z.item}>
                    <img src="https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt="avatar"/>
                    {props.message}
                    <div>
                        <span>like</span>{props.likesCount}
                    </div>
                    
                </div>
    );
}

export default Post;