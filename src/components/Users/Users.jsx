import React from 'react';
import z from './Users.module.css';
import avatar from '../../img/avatar2.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


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
                        ? <button onClick={() => {
                            
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "c8a4793a-00f6-4231-895a-075a0a628dc2"
                                }
                            })
                                .then(response => {
                                    if(response.data.resultCode == 0) {
                                        props.follow(u.id);
                                    }
                            });
                        }}>Unfollow</button> 
                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "c8a4793a-00f6-4231-895a-075a0a628dc2"
                                }
                            })
                                .then(response => {
                                    if(response.data.resultCode == 0) {
                                        props.follow(u.id);
                                    }
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