import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
    render() {
        const { input, status, id, onToggle, onRemove } = this.props;
        return(
            <div className="todo-item">
                <div className={}></div>
                <div className={"todo ${status ? 'checked' : ''}"}>
                    <div>{input}</div>
                </div>
            </div>
        );
    }
}

export default TodoItem;