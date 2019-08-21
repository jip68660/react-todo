import React, { Component }from 'react';
import TodoListFormat from "./component/TodoListFormat";
import UserInput from "./component/UserInput";
import TodoListItem from "./component/TodoListItem";

class App extends Component {
  render() {
    return (
      <div>
        <TodoListFormat form={<UserInput/>}>
          <TodoListItem/>
        </TodoListFormat>
      </div>
    );
  }
}

export default App;
