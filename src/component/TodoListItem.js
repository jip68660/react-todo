import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoListItem extends Component {
    render() {
        const { todo, onToggle, onRemove } = this.props;
        
        const todoList = todo.map(
            ({id, text, status}) => (
                <TodoItem
                    id={id}
                    text={text}
                    status={status}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id} />
            )
        );
        
        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoListItem;