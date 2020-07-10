import React from 'react'
import classes from '../GeneralStyles.module.css'

const users = [
    {
      key: 1,
      name: 'Joe',
      isAdmin: true
    },
    {
      key: 2,
      name: 'Kolia',
      isAdmin: false
    },
    {
      key: 3,
      name: 'Vlad',
      isAdmin: true
    },
    {
      key: 4,
      name: 'Sergey',
      isAdmin: true
    },
    {
      key: 5,
      name: 'Kolawole',
      isAdmin: false
    },
    {
      key: 6,
      name: 'Bill Gates',
      isAdmin: false
    },
  ];
  
  const User = ({name, isAdmin}) => {
    /* =============== TASK 2 ====================
      Display the name of Users in a <p> tag. However for each user check the value of isAdmin, if true then add this emoji '👑' to the name.
    */
   let logo = '👑';
   return(
     <div>
       <span>{name}</span>{isAdmin && <span>{logo}</span>}
     </div>
   )
  }
  
  class AdminUsersList extends React.Component {
    render() {
      return (
        <div className={classes.users}>
          <h2>User List</h2>
          { /* =============== TASK 1 ====================
             Loop over array of users and pass them as props into <User />
          */}
          {users.map(user=> <User {...user} />)}
        </div>
      )
    }
  }
  
export default AdminUsersList;
  