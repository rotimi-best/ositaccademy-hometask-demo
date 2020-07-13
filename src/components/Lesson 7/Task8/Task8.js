import React from "react";
import './style.css';

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


const Info = ({text}) => <p className="info">{text}</p>;
const Warning = ({text}) => <p className="warning">{text}</p>;
const Error = ({text}) => <p className="error">{text}</p>;

function Notification(props) {
   const filterNotifications = (item) => {
        switch (item.notificationType) {
            case 'warning':
                return <Warning key={item.key} text={item.text}/>;
            case 'error':
                return <Error key={item.key} text={item.text}/>;
            case 'info':
                return <Info key={item.key} text={item.text}/>;
            default:
                return null;

        }
    }
    const elements = props.notifications.map((item) => {
       return filterNotifications(item)
    });
    return (
        <React.Fragment>
            {elements}
        </React.Fragment>
    )

}

export default class Lesson7Task8 extends React.Component {
    render() {
        return (
            <div>
                <h2>User List</h2>

                <Notification notifications={notifications}/>
            </div>
        )
    }
}