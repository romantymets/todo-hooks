import React from 'react'
import {useHistory} from "react-router-dom";
import classNames from "classnames";
import style from "./List.module.css"


function List({ todos, deleteTodo, onItemCheck }) {

  const history = useHistory();

  const onItemClick = (todo) => () => {
    history.push(`/todoitem${todo._id}`);
  };

  return (
    <ul className="list-group list-group-flush">
      {todos.map(
        (todo, index) => (
          <li className="list-group-item" key={todo._id} onClick={onItemClick(todo)}>
            <div className="container">
              <div className={classNames("row", `${todo.completed ? style.doneTodo : null}`)}>
                <div className="col-1">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={onItemCheck(todo._id)}
                    onClick={(e) => {e.stopPropagation()}}
                  />
                </div>
                <div className="col-1"> {index + 1}</div>
                <div className="col-9"> {todo.title}</div>
                <div className="col-1">
                  <button className="btn-danger" onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(todo._id)
                  }}> X
                  </button>
                </div>
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
}

export default List