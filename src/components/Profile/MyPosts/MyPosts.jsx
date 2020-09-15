import React from 'react';
import z from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)
    
    return (
        <div>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={z.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;