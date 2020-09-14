import React from 'react';
import z from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={z.posts}>
                <Post message="Hi, how are you?" likesCount=" 58" />
                <Post message="It's my first post" likesCount=" 137" />
            </div>
        </div>
    );
}

export default MyPosts;