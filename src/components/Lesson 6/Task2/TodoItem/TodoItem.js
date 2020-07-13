import React from 'react';

const TodoItem = ({todos, onDeleteItem}) => {
    const elements = todos.map((item) => {
        return (
            <li key={item.id}
                style={{cursor: 'pointer'}}
                onClick={() => onDeleteItem(item.id)}>
                {item.label}
            </li>
        )
    });
    return (
        <ul>
            {elements}
        </ul>
    );
};

export default TodoItem;