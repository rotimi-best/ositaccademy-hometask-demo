import React from 'react'
import classes from '../GeneralStyles.module.css'
import Task from './Task';
import TaskInput from './TaskInput';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 0, title: 'First task', done: false },
        { id: 1, title: 'Second task', done: false },
        { id: 2, title: 'Third task', done: false }
      ]
    }
  }
addTask = inputValue => {
  this.setState({...this.state,
          tasks: [...this.state.tasks, {
            id: this.state.tasks.length !== 0 ? this.state.tasks.length : 0,
            title: inputValue,
            done: false} ]

    });
}

deleteTask = (taskId) => {
  const index = this.state.tasks.map(task => task.id).indexOf(taskId);
  let {tasks} = this.state;
  tasks.splice(index, 1);
  this.setState({...tasks})
}

doneTask = (taskId) => {
  const index = this.state.tasks.map(task => task.id).indexOf(taskId);
  let {tasks} = this.state;
  tasks[index].done = true;
  this.setState({...tasks})
}

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(t => !t.done);
    const doneTasks = tasks.filter(t => t.done);
    return (
      <div className={classes.container}>
        <h2>Second task to create Todo app</h2>
        <div classes={classes.todo}>
          <h3 className={classes.todo_top}>Active task: {activeTasks.length}</h3>
          {[...activeTasks, ...doneTasks].map(t => (
            <Task doneTask={()=>this.doneTask(t.id)} deleteTask={() =>this.deleteTask(t.id)} task={t} key={t.id} />
          ))}
          <TaskInput addTask={this.addTask} />
        </div>
      </div>
    )
  }
}

export default Todo;