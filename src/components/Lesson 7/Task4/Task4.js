import React,{Component, Fragment} from "react";
import './task4.css';

const todos = [
    {
        key: 1,
        status: 'start',
        text: 'Learn english'
    },
    {
        key: 2,
        status: 'done',
        text: 'Watch a new movie'
    },
    {
        key: 3,
        status: 'inProgress',
        text: 'Make a post on Instagram'
    },
    {
        key: 4,
        status: 'done',
        text: 'Learn React'
    },
    {
        key: 5,
        status: 'inProgress',
        text: 'Do home task'
    },
    {
        key: 6,
        status: 'start',
        text: 'Go shopping'
    },
];

const Todo = (props) => {

    const elements = props.todos.map((item) => {

        return (
                <h4 key={item.key} className={item.status}>{item.text}</h4>
            )
    });
    return (
        <Fragment>
            {elements}
        </Fragment>
    )
};

export default class  Lesson7Task4 extends Component {
    render() {
        return (
            <div>
                <h2>Todo</h2>
                <Todo todos={todos}/>
            </div>
        )
    }
}