import React from 'react';
import classes from './Users.module.css'
import UserItem from './UserItem'
import Paginator from '../../common/Paginator/Paginator'

const Users = (props) => {
    return (
        <div className={classes.users}>
            <div className={classes.container}>
                <h2>Fourth task to send AJAX-request Users</h2>
            </div>
            <Paginator pageNumber={props.state.currentPage} 
                    pageSize={props.state.pageSize} 
                    totatUsersQuantity={props.state.totatUsersQuantity} 
                                onPageChanged={props.onPageChanged} />
            <div className={classes.userItem_container}>
                {props.state.users.map(user => <UserItem {...user} key={user.id} />)}
            </div>

        </div>
    )
}
export default Users;