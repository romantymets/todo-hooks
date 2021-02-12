import React, { useState } from 'react';
import List from "./component/List/List";
import Api from "../../api/Api";

function TodoContainer() {
  const [InputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);

  function onInput (e) {
  const inputtext = e.target.value;
  setInputText( inputtext )
  }

  return (
    <div className='container'>
      <form className='container'>
        <div className="form-group">
          <h2> Enter Todo </h2>
          <input type="text" className="form-control"
                 placeholder="Enter text" onChange={onInput} />
                 <br/>
        <button type="submit" className="btn btn-primary"> Submit </button>
        </div>
      </form>
      <List/>
    </div>
  );
}

export default TodoContainer