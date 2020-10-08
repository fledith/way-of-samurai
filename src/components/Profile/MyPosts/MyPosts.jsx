import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import FormControl from '../../common/FormControls/FormsControls';
import z from './MyPosts.module.css';
import Post from './Post/Post';

const Textarea = FormControl("textarea");

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} id={p.id} />);

    let onAddPost = (value) => {
        props.addPost(value.newPostBody);
    }
    
    return (
        <div className={z.wall}>
            <h3>My post</h3>
            <AddPostReduxForm onSubmit={ onAddPost } />
            <div className={z.posts}>
                { postsElements }
            </div>
        </div>
    );
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostBody" placeholder="Write a post..." />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: "profileAddPostForm"})(AddPostForm)

export default MyPosts;