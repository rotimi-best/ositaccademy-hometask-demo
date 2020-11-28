import React, {Component} from "react";
import TodoItem from "../TodoItem/TodoItem";
import AddItem from "../AddItem/AddItem";

export default class Todo extends Component {

    maxId = 1;
    state = {
        todoData: [
            this.createTodoItem('Drink tea'),
            this.createTodoItem('Read book'),
            this.createTodoItem('Eat meat'),
            this.createTodoItem('Do something')
        ],
        term: ''
    };

    createTodoItem(label) {
        return {
            label,
            id: this.maxId++,
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);
            const newArr = [...before, ...after];

            return {
                todoData: newArr
            }
        })
    };
    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        // console.log(newItem);
        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            };

        });
    };

    render() {

        return (
            <div>
                <TodoItem todos={this.state.todoData} onDeleteItem={this.deleteItem}/>
                <AddItem addItem={this.addItem}/>
            </div>
        );
    }
}
