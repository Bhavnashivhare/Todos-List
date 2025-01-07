import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
  const todos = props.todos || []; // Fallback to an empty array if undefined

  return (
    <div className="container my-5">
      <h3 className="title is-4">Todo List</h3>
      {todos.length === 0 ? (
        <p>No Todos to display</p>
      ) : (
        todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
              <hr />
              </>
          );
        })
      )}
    </div>
  );
};

export default Todos;