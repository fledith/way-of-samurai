import React from 'react';
import z from './Users.module.css';
import avatar from '../../img/avatar2.png'
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../api/api';


let Users = (props) => {

    return (
        <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={ u.photos.small != null ? u.photos.small : avatar} className={z.avatar} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed 
                        ? <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {
                            props.toggleIsFollowing(true, u.id);
                            userAPI.unfollow(u.id).then(data => {
                                if(data.resultCode == 0) {
                                    props.follow(u.id);
                                }
                                props.toggleIsFollowing(false, u.id);
                            });
                        }}>Unfollow</button> 
                        : <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {
                            props.toggleIsFollowing(true, u.id);
                            userAPI.follow(u.id).then(data => {
                                if(data.resultCode == 0) {
                                    props.follow(u.id);
                                }
                                props.toggleIsFollowing(false, u.id);
                            });
                        }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
    )
}


export default Users;