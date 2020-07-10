import React from 'react'
import classes from '../GeneralStyles.module.css'

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

const TodoTask = (props) => {
  /* =============== TASK 2 ====================
    Check the status of the todo, if it is 'done' use className="done", if it is 'start' then use className="start" and if it is 'inProgress' then use className="inProgess"
  */
  let classStatus = props.status === 'done' ? <div className={`${classes.todoItem} ${classes.done}`}>{props.text}</div> :
    props.status === 'inProgress' ? <div className={`${classes.todoItem} ${classes.inProgress}`}>{props.text}</div> : 
    <div className={`${classes.todoItem} ${classes.start}`}>{props.text}</div>

    

    
  return (
    <>
    {classStatus}
    </>
  )

}

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo</h2>
        { /* =============== TASK 1 ====================
             Loop over array of todos and pass them as props into <Todo />
          */}

        {todos.map(todo => <TodoTask {...todo} key={todo.key} />)}
      </div>
    )
  }
}

export default TodoList;



