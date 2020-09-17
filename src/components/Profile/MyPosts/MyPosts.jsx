import React from 'react';
import z from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);
    let newPostElement = React.createRef();
    
    let AddPost = () => {
        //props.addPost();
        props.dispatch( {type: 'ADD-POST'} );
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text };
        props.dispatch(action);
    }

    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} placeholder="Write a post..." />
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