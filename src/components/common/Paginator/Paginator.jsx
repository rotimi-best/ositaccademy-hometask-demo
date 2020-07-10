import React from 'react';
import classes from './Paginator.module.css'
const Paginator = ({totatUsersQuantity, pageSize, currentPage, onPageChanged=null}) => {
    let pagesQuantity = Math.ceil(totatUsersQuantity / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesQuantity; i++) {
        pages.push(i)
    }
   
    return(
        <div className={classes.paginator}>
           
            { pages.map(p => {
                return <button onClick={() => onPageChanged(p)} key={p} className={currentPage === p ? classes.currentPage : undefined} >{p}</button>
            })}
           
        </div>
    )
}
export default Paginator;