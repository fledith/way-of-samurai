import React from 'react';
import z from './Users.module.css';
import avatar from '../../img/avatar2.png'


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let thisPage = props.currentPage;

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                { pages.map(p => {
                    if (thisPage < 3) {
                        if (p < 6 || p > pagesCount - 1) {
                            if (thisPage < 3){
                                if (p === 5) {return "... "}
                            } 
                            return <span className={thisPage === p ? z.selectedPage : z.notSelectedPage} onClick={ () => {props.onPageChanged(p)} }>{p + " "}</span>
                        } 
                    } else if (p < 2 || p > pagesCount - 1) {
                        return <span className={thisPage === p ? z.selectedPage : z.notSelectedPage} onClick={ () => {props.onPageChanged(p)} }>{p + " "}</span>
                    } else if (p < thisPage + 3 && p > thisPage - 3) {
                        return <span className={thisPage === p ? z.selectedPage : z.notSelectedPage} onClick={ () => {props.onPageChanged(p)} }>{p + " "}</span>
                    } else if (p < thisPage + 4 && p > thisPage - 4) {
                        return "... "
                    } 
                })}
            </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={ u.photos.small != null ? u.photos.small : avatar} className={z.avatar} />
                    </div>
                    <div>
                        {u.followed 
                        ? <button onClick={() => {props.follow(u.id)}}>Unfollow</button> 
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
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