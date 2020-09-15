import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  {id: 1, name: "Dimych"}, 
  {id: 2, name: "Zekich"}, 
  {id: 3, name: "Viktor"}, 
  {id: 4, name: "Alice"}, 
  {id: 5, name: "Volodka"}, 
  {id: 6, name: "Valentin"}, 
  {id: 7, name: "Maks"}
]
let messages = [
  {id: 1, message: "Hi"},
  {id: 2, message: "Hru?"},
  {id: 3, message: "Yo"},
  {id: 4, message: "Hi bro"},
  {id: 5, message: "Yeah"},
  {id: 6, message: "???"},
  {id: 7, message: "Not today!"}
]
let posts = [
  {id: 1, message: "Hi, how are you?", likesCount: 58},
  {id: 2, message: "It's my first post", likesCount: 137},
  {id: 3, message: "Kek, lol, azaza", likesCount: 3},
  {id: 4, message: "Hi, from future", likesCount: 20},
  {id: 5, message: "What's going on?", likesCount: 43}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
