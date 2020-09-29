import React from 'react';
import z from './Users.module.css';


let NumberPage = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let thisPage = props.currentPage;

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            { pages.map(p => {
                if (thisPage < 3) {
                    if (p === 5) {
                        return "... "
                    } else if (p < 6 || p > pagesCount - 1) {
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
    )
}


export default NumberPage;