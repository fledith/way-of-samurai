import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {
    

    return (
        <StoreContext.Consumer> 
            {
            (store) =>{

                let state = store.getState().profilePage;

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return <MyPosts addPost={addPost} updateNewPostText={onPostChange} posts={state.posts} newPostText={state.newPostText} />}
        }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;