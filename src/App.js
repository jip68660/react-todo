import React, { Component }from 'react';
import TodoListFormat from "./component/TodoListFormat";

class App extends Component {
  render() {
    return (
      <div>
        <TodoListFormat>할일</TodoListFormat>
      </div>
    );
  }
}

export default App;
