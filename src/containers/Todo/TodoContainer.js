import React, {useState, useEffect, useRef} from 'react';
import List from "./component/List/List";
import Api from "../../api/Api";
import Spiner from "../../components/Spiner/Spiner";
import classNames from "classnames";
import style from "./Todo.module.css"

const showTodo = 4;

function TodoContainer() {

  const [InputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [downloadTodoFromServer, setDownloadTodoFromServer] = useState(false);
  const [addTodoToTheServer, setaddTodoToTheServer] = useState(false);
  const inputRef = useRef(null);

  const onAddTodo = (e) => {
    e.preventDefault();
    const inputText = InputText;
    const newTodo = todo;
    setaddTodoToTheServer(true);
    Api.post("/todo", {
        title: inputText,
      }
    )
      .then((response) => {
        const { data } = response;
        setTodo([...newTodo, data]);
        setaddTodoToTheServer(false);
        setInputText("");
        inputRef.current.value = "";
        inputRef.current.focus();
      })
      .catch((error) => {
        alert(error.message)
      })
  };

  function onInput(e) {
    const inputtext = e.target.value;
    setInputText(inputtext)
  }

  useEffect(() => {
    // download todos from server
    setDownloadTodoFromServer(true);
    Api.get(`/todo?limit=${showTodo}`)
      .then((response) => {
        const { data } = response;
        setTodo(data);
        setDownloadTodoFromServer(false)
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
        newTodo.splice(findIndexElement, 1);
        setTodo(newTodo)
      })
      .catch((error) => {
        alert(error.message)
      })
  };

  const onItemCheck = (_id) => (e) => {
    const checked = e.target.checked;
    Api.patch(`/todo/${_id}`, { completed: checked })
      .then(() => {
        const currentTodo = todo.find(todo => todo._id === _id);
        currentTodo.completed = checked;
        const newTodo = todo.map(todo => todo._id === _id ? currentTodo : todo);
        setTodo(newTodo)
      })
      .catch((error) => {
        alert(error.message)
      })
  };

  const countTodoChecked = () => {
    const checkedTodo = todo.filter(todo => todo.completed === true);
    return checkedTodo.length
  };

  const loadMore = () => {
    Api.get(`/todo?limit=${showTodo}&skip=${todo.length}`)
      .then((response) => {
        const { data } = response;
        setTodo([...todo, ...data])
      })
      .catch((error) => {
        alert(error.message)
      })
  };

  return (
    <div className='container'>
      <div className={style.buttonLoadMore}>
        <h2> My TODO List </h2>
      </div>
      <form className='container' onSubmit={onAddTodo}>
        <div className={classNames("form-group", style.formContainer)}>
          <input type="text" className="form-control" placeholder="Please enter your todo"
                 onChange={onInput} ref={inputRef} required/>
          <br/>
          <button type="submit" className={classNames("btn btn-primary", style.buttonSubmit)}
                  disabled={addTodoToTheServer}>
            {addTodoToTheServer ? <Spiner/> : "Submit"}

          </button>
        </div>
      </form>
      <div className={style.buttonLoadMore}>
        <button type="submit" className="btn btn-primary" onClick={loadMore}>
          Load more
        </button>
      </div>
      {downloadTodoFromServer ? <Spiner/> : null}
      <List
        todos={todo}
        deleteTodo={deleteTodo}
        onItemCheck={onItemCheck}
      />
      <footer>
        <p> All todo : {todo.length}</p>
        <p> Checked todo {countTodoChecked()}</p>
      </footer>
    </div>
  );
}

export default TodoContainer