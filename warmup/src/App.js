import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList'
import ToDoInput from './components/ToDoInput'



class App extends Component {
  state = {
    todos: ['take out trash', 'do laundry', 'conquer the world', 'eat cake to celebrate']
  }

  addTodo = (todo) => {
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }

  render() {
    return (
      <div className="App">
        <ToDoInput addTodo={this.addTodo}/>
        <ToDoList
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
