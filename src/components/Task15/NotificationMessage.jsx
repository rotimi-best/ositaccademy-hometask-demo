import React from 'react'
import classes from '../GeneralStyles.module.css'

const notifications = [
  {
    key: 1,
    text: 'Welcome user101',
    notificationType: 'info'
  },
  {
    key: 2,
    text: 'You have been banned',
    notificationType: 'error'
  },
  {
    key: 3,
    text: 'New friend request',
    notificationType: 'info'
  },
  {
    key: 4,
    text: 'You are about to exceed your usage limit',
    notificationType: 'warning'
  },
  {
    key: 5,
    text: 'Free trial will soon expire',
    notificationType: 'warning'
  },
  {
    key: 6,
    text: 'Token expired',
    notificationType: 'error'
  },
];


const Info = ({ text }) => {
  return <p className={classes.info}>
    {text}</p>;
}

const Warning = ({ text }) => <p className={classes.warning} >{text}</p>;
const Error = ({ text }) => <p className={classes.error} >{text}</p>;

class Notification extends React.Component {
  /*=============== TASK 2 ==================
    Depending on the notificationType choose the right component.
    Either <Info />, <Warning />, <Error /> or null.
    Use a switch case for this
  */
  chooseNotification = (note, text) => {
    switch (note) {
      case 'info':
      return <Info text={text} />;

      case 'error':
      return <Error text={text} />;

      case 'warning':
      return <Warning text={text} />;

      default: 
      return <p>There is no notifications yet</p> 

    }
  }

  render() {
    let note = this.props.notificationType;
    let text = this.props.text
    return (
      <div>
        {this.chooseNotification(note, text)}
      </div>
    )
  }
}


class NotificationMessage extends React.Component {
  render() {
    return (
      <div className={classes.notification_block}>
        <h2>Notifications List</h2>
        { /* =============== TASK 1 ====================
             Loop over the array of notifications and pass them as props into <Notification />
          */}
        {notifications.map(note => <Notification {...note} key={note.key} />)}
      </div>
    )
  }
}

export default NotificationMessage;

