import React from 'react';
import ToDo from './ToDo';

const ToDoList = ( props ) => {
  console.log("props in toDoList", props)
  let toDosList = props.todos.map( (todo, i) => {
    console.log("hello", i)
    return(
      <li key={i} todo={ todo }></li>
    )
  })
  return (
    <div className="container">
      <h1>ToDos</h1>
      <div className="collection">
        <ul>
          {toDosList}
        </ul>
      </div>
    </div>
  )
}

export default ToDoList