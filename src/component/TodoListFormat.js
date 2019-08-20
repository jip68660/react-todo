import React from "react";
import "./TodoListFormat.css"

const TodoListFormat = ({form, children}) => {
    return (
        <div className="todo-list-format">
            <div className="title">Today's Plan</div>
            <section className="format-wrapper">
                {form}
            </section>
            <section className="list-wrapper">
                {children}
            </section>
        </div>
    );
};

export default TodoListFormat;