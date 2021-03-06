import React, { Component }from 'react';
import TodoListFormat from "./component/TodoListFormat";
import UserInput from "./component/UserInput";
import TodoListItem from "./component/TodoListItem";

class App extends Component {
  //id for todo-items  
  id = 0;
  //todo-items will save in todo[]
  state = {
    input: "",
    todo: []
  }

  /*****trying to display if past todo-list exists, using handleCreate or sometingelse*******/
  // componentDidMount = () => {
  //   const { input, todo } = this.state;
  //   if (localStorage.length !== 0) {
  //     for (let i = 0; i<10; i++) {
  //       // this.setState({
  //       //   todo: todo.concat({
  //       //     id: this.id++,
  //       //     text: "hello" + i,
  //       //     // text: localStorage.getItem(i),
  //       //     status: false
  //       //   })
  //       // });
  //       this.handleCreate2("hello" + i);
  //       console.log(todo);
  //       // var event = new CustomEvent("build", {target: {value: "hello" + i}});
  //       // var event2 = new Event("event2", {target: {writable: true}});
  //       // const temp = (<input value="Hello" />);
  //       // event2.target = temp;
  //       // console.log(event2.target);
        
  //       // this.handleCreate(event);
  //       // console.log(event);
  //     }
  //   }
  // }

  //any change on target's value will save in input
  //for example, if user puts "hello", input's value will be "hello"
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }
  //process of adding user's input to todo[] list
  //input will became "" after create; no longer need need to hold
  handleCreate = (e) => {
    const { input, todo } = this.state;
    //if the (input !==""), no-input will not be accepted
    (input !== "") && this.setState({
      input: "",
      //.concat() will add following informations to todo[] 
      todo: todo.concat({
        id: this.id++,
        text: input,
        //default status is false; which no check-mark -> not done
        status: false
      })
    });
    //save in the localStorage
    //try to use 'status' but not working, so just use true/false
    (input !== "") && localStorage.setItem(this.id - 1, JSON.stringify([input, false]));
  }
  // handleCreate2 = (text2) => {
  //   console.log(text2);
  //   const { input, todo } = this.state;
  //   this.setState({
  //     input: "",
  //     //.concat() will add following informations to todo[] 
  //     todo: todo.concat({
  //       id: this.id++,
  //       text: text2,
  //       //default status is false; which no check-mark -> not done
  //       status: false
  //     })
  //   });
  //   //save in the localStorage
  //   //try to use 'status' but not working, so just use true/false
  //   localStorage.setItem(this.id - 1, JSON.stringify([input, false]));
  // }

  //if user press "Enter" key, do same handleCreate(e) process
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate(e);
    }
  }
  //original --------- remove certain todo-item from list
  // handleRemove = (id) => {
  //   const { todo } = this.state;
  //   //.filter works as delete 
  //   this.setState({
  //     todo: todo.filter(todo => todo.id !== id)
  //   });
  //   localStorage.removeItem(id);
  //   // this.decreaseIndex();
  //   // console.log(todo);
  // }
  handleRemove = (id, text) => {
    const { todo } = this.state;
    //.filter works as delete 
    this.setState({
      todo: todo.filter(todo => todo.text !== text)
    });
    localStorage.removeItem(id);
  }
  //toggle action to show that the todo-item is finshed or not
  handleToggle = (id) => {
    const { todo } = this.state;
    //using the id, find the index of following todo-item
    const index = todo.findIndex(todo => todo.id === id);
    //selected todo-item
    const selected = todo[index];
    //copy the todo[] 
    const nextTodo = [...todo];
    //change the todo-item status in a new copied array
    nextTodo[index] = {
      ...selected, status: !selected.status
    };
    //override the todo[] with changed todo-item
    this.setState({
      todo:nextTodo
    });
    //save in the localStorage with the changed information everytime it toggles
    localStorage.setItem(id, JSON.stringify([selected.text, nextTodo[index].status]));
    // console.log(todo);
  }

  render() {
    //declare const with the information outside of render()
    const { input, todo } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <div>
        <TodoListFormat form={
          //let UserInput to perform the basic function
          <UserInput 
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate} />
        }>
          <TodoListItem todo={todo} onToggle={handleToggle} onRemove={handleRemove}/>
        </TodoListFormat>
      </div>
    );
  }
}

export default App;
