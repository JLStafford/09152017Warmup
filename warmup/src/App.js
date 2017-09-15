import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList'



class App extends Component {
  state = {
    todos: ['take out trash', 'do laundry', 'conquer the world', 'eat cake to celebrate']
  }

  render() {
    return (
      <div className="App">
        <ToDoList
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
