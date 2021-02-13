import React from 'react'
import style from "./List.module.css"
import classNames from "classnames";

function List ({ todos, deleteTodo, onItemCheck }) {
  return (
    <ul className="list-group list-group-flush">
      {todos.map(
        (todo, index) => (
          <li className="list-group-item" key={todo._id}>
            <div className={classNames("row", `${ todo.completed ? style.doneTodo : null }`)}>
              <div className="col-1">
                <input type="checkbox" checked={todo.completed} onChange={onItemCheck(todo._id)}/>
              </div>
              <div className="col-2"> {index+1}</div>
              <div className="col-6"> {todo.title}</div>
               <div className="col-3">
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