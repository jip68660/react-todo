import React, { Component }from 'react';
import TodoListFormat from "./component/TodoListFormat";
import UserInput from "./component/UserInput";
import TodoListItem from "./component/TodoListItem";

class App extends Component {
  id = 0;

  state = {
    input: "",
    todo: []
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }
  handleCreate = (e) => {
    const {input, todo} = this.state;
    this.setState({
      input: "",
      todo: todo.concat({
        id: this.id++,
        text: input,
        status: false
      })
    });
  }
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate(e);
    }
  }

  render() {
    const { input } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
      <div>
        <TodoListFormat form={
          <UserInput 
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate} />
        }>
          <TodoListItem/>
        </TodoListFormat>
      </div>
    );
  }
}

export default App;
