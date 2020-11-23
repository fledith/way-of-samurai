import profileReducer, { addPost, deletePost } from "./profileReducer";
import ReactDOM from "react-dom";
import React from "react";

let state = {
    posts: [
        {id: 1, message: "It's my first post", likesCount: 137},
        {id: 2, message: "Hi, how are you?", likesCount: 58},
        {id: 3, message: "Kek, lol", likesCount: 3},
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPost("Lonely day");
    
    //2. action
    let newState = profileReducer(state, action);

    //3.expectation

    expect(newState.posts.length).toBe(4);
    expect(newState.posts[4].message)
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPost("Lonely day");
    
    //2. action
    let newState = profileReducer(state, action);

    //3.expectation
    expect(newState.posts[4].message).toBe("Lonely day");

});

it('after deleting length of message should be decrement', () => {
    // 1. test data
    let action = deletePost(1);
    
    //2. action
    let newState = profileReducer(state, action);

    //3.expectation
    expect(newState.posts.length).toBe(3);

});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);
    
    //2. action
    let newState = profileReducer(state, action);

    //3.expectation
    expect(newState.posts.length).toBe(4);

});