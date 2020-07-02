import React from 'react';
import classes from './Users.module.css'
import UserItem from './UserItem'
import Paginator from '../Paginator/Paginator'

const Users = (props) => {

    return (
        <div className={classes.users}>
            <div className={classes.container}>
                <h2>Fourth task to send AJAX-request Users</h2>
            </div>
            <Paginator {...props} />
            {props.state.users.map(user => <UserItem {...user} key={user.id} />)}
        </div>
    )
}
export default Users;