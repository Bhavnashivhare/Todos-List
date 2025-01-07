import React from 'react'

const TodoItem = ({todo , onDelete}) => {
  return (
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="button is-primary" onClick={ ()=>{onDelete(todo)}}>Delete</button>
      
    </div>
  )
}

export default TodoItem;
