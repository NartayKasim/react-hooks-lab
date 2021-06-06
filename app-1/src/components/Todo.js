import React from 'react';

export default function Todo(props) {
    return (
        <h3 className="todo-item">{props.task}</h3>
    )
}