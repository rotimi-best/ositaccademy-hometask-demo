import React from 'react';
import classes from './Users.module.css'
const UserItem = (props) => {
    return(
        <div className={classes.userItem}>
            <p><span>Id:</span> {props.id}</p>
            <p><span>Title:</span> {props.title}</p>
            <p><span>Body:</span> {props.body}</p>

        </div>
    )
}
export default UserItem;