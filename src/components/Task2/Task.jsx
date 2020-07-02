import React from 'react';
import classes from '../GeneralStyles.module.css'

const Task = ({ task, ...props }) => {

    const deleteTask = () => {
        props.deleteTask()
    }

    const buttonClass = `${classes.task_button} ${task.done ? classes.task_button_done : ''}`;
    const textClass = `${classes.task_text} ${task.done ? classes.task_text_done : ''}`;
    return (
        <div className={classes.task}>
            <p onClick={deleteTask} className={textClass} >{task.title}</p>
            {
                task.done ? <button onClick={props.deleteTask} className={buttonClass}>&#9745;</button> : <button onClick={props.doneTask} className={buttonClass}>&#10065;</button>
            }
        </div>
    )
}
export default Task;