import React from "react";

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

const User = (props) => {

    const elements = props.users.map((item) => {

        return (
            <p key={item.key}>{item.name} {item.isAdmin && '👑'}</p>
        )
    });
    return (
        <React.Fragment>
            {elements}
        </React.Fragment>
    )
}

export default class Lesson7Task7 extends React.Component {
    render() {
        return (
            <div>
                <h2>User List</h2>
                <User users={users}/>
            </div>
        )
    }
}