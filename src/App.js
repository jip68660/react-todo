import React, { Component }from 'react';
import TodoListFormat from "./component/TodoListFormat";
import UserInput from "./component/UserInput";

class App extends Component {
  render() {
    return (
      <div>
        <TodoListFormat form={<UserInput/>}>할일</TodoListFormat>
      </div>
    );
  }
}

export default App;
