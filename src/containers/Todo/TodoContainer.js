import React, { useState, useEffect } from 'react';
import List from "./component/List/List";
import Api from "../../api/Api";

function TodoContainer() {
  const [InputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);

  const onAddTodo = (e) => {
    e.preventDefault();
    const inputText = InputText;
    const newTodo = todo;
    Api.post("/todo", {
      title: inputText
    }
      )
      .then((response) => {
        const { data } = response;
        setTodo([...newTodo, data])
      })
      .catch((error) => {
        alert(error.message)
      })
  } ;
  function onInput (e) {
  const inputtext = e.target.value;
  setInputText( inputtext )
  }
  useEffect(() => {
    Api.get("/todo")
      .then((response) => {
        const { data } = response;
        setTodo( data )
      })
      .catch((error) => {
        alert(error.message)
      })
  }, []);
  const deleteTodo = (_id) => {
    const findIndexElement = todo.findIndex(todo => todo._id === _id);
    Api.remove(`/todo/${_id}`)
      .then(() => {
        const newTodo = [...todo];
        newTodo.splice(findIndexElement,1);
        setTodo(newTodo)
      })
      .catch((error) => {
        alert(error.message)
      })
  };

  return (
    <div className='container'>
      <form className='container' onSubmit={onAddTodo}>
        <div className="form-group">
          <h2> Enter Todo </h2>
          <input type="text" className="form-control"
                 placeholder="Enter text" onChange={onInput} />
                 <br/>
        <button type="submit" className="btn btn-primary"> Submit </button>
        </div>
      </form>
      <List
        todos = {todo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default TodoContainer