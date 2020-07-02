import React from 'react';

class TaskInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
        
    }

    onInputValueChange = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    addTaskByEnter = e => {
        if(e.key === 'Enter') {
            this.addTask()
        }
    }

    addTask = () => {
        let {inputValue} = this.state;
        if(inputValue) {
        this.props.addTask(inputValue);
        this.setState({
            inputValue: ''
        })}

    }

    render() {
        return(
            <div>
                <input onKeyPress={this.addTaskByEnter} onChange={ this.onInputValueChange } value={this.state.inputValue} />
                <button onClick={this.addTask} >Add task</button>
            </div>
        )
    }
}

export default TaskInput;