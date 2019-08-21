import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoListItem extends Component {
    render() {
        const { todo, onToggle, onRemove } = this.props;
        return(
            <div>
                <TodoItem text="garbage"/>
                <TodoItem text="garbage"/>
                <TodoItem text="garbage"/>
            </div>
        );
    }
}

export default TodoListItem;