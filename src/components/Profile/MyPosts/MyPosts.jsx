import React from 'react';
import z from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    
    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 58},
        {id: 2, message: "It's my first post", likesCount: 137},
        {id: 3, message: "Kek, lol, azaza", likesCount: 3},
        {id: 4, message: "Hi, from future", likesCount: 20},
        {id: 5, message: "What's going on?", likesCount: 43}
    ]

    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)
    
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