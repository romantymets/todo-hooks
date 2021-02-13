import React, { useState } from 'react';

function List ({ todos, deleteTodo }) {
  return (
    <ul className="list-group list-group-flush">
      {todos.map(
        (todo, index) => (
          <li className="list-group-item" key={todo._id}>
            <div className="row">
              <div className="col-2"> {index+1}</div>
              <div className="col-2"> {index+1}</div>
              <div className="col-6"> {todo.title}</div>
               <div className="col-4">
                 <button className="btn-danger" onClick={() => {deleteTodo(todo._id)}}> X </button>
               </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
}

export default List