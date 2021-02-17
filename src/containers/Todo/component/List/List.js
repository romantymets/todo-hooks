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
          <li className={classNames(style.listItem, `${todo.completed ? style.doneTodo : null}`)} key={todo._id}
              onClick={onItemClick(todo)}>
            <div className={classNames("container")}>
              <div className="row">
                <div className="col-1">
                  <input
                    className={style.checkboxContainer}
                    type="checkbox"
                    checked={todo.completed}
                    onChange={onItemCheck(todo._id)}
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  />
                </div>
                <div className="col-1"> {index + 1}</div>
                <div className="col-9"> {todo.title}</div>
                <div className="col-1">
                  <button className={classNames("btn-danger", style.button)} onClick={(e) => {
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