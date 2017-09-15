import React from 'react';
import ToDo from './ToDo';

const ToDoList = ( props ) => {
  console.log("props in toDoList", props)
  let toDosList = props.todos.map( (todo, i) => {
    console.log("hello", i)
    return(
      <ToDo key={i} todo={ todo } />
    )
  })
  return (
    <div className="container">
      <h1>ToDos</h1>
      <div className="collection">
        {toDosList}
      </div>
    </div>
  )
}

export default ToDoList