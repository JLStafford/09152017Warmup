import React, { Component } from 'react'

class ToDoInput extends Component {

  state = {
    newTodo: ''
  }

  render () {
    return (
      <div>
        <input type="text"
        value={this.state.newToDo}
        onChange={(e) => this.setState({ newTodo: e.target.value})}
        />
      <button onClick={this.props.addTodo(this.state.newTodo)}>ButtonThing</button>
      </div>
    )
  }
}

export default ToDoInput