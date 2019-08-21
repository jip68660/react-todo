import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
    render() {
        const { text, status, id, onToggle, onRemove } = this.props;
        return(
            <div className="todo-item" onClick={() => onToggle(id)}>
                {
                    status && (<div className="check-mark">&#x2713;</div>)
                }
                <div className={`todo ${status && 'checked'}`}>
                    <div className="inputText">{text}</div>
                </div>
                <div className="remove-button" onClick= {(e) => {
                    e.stopPropagation();
                    onRemove(id)}
                }>&times;</div>
            </div>
        );
    }
}

export default TodoItem;