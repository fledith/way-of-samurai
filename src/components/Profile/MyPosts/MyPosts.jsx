import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import z from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);
    
    let AddPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        //props.updateNewPostText
        //let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text };
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} placeholder="Write a post..." />
                </div>
                <div>
                    <button onClick={ AddPost }>Add post</button>
                </div>
            </div>
            <div className={z.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;