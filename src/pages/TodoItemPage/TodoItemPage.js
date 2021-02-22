import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from "react-router-dom";
import Api from "../../api/Api";


function TodoItemPage() {

  const params = useParams();
  const history = useHistory();
  const [getTodo, setTodo] = useState({});
  const _id = params._id;

  useEffect(() => {
    Api.get(`/todo/${_id}`)
      .then((response) => {
        const { data } = response
        setTodo(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const goBack = () => history.goBack();

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          TODO
        </div>
        <div className="card-body">
          <h5 className="card-title">{getTodo ? getTodo.title : ""}</h5>
          <button type="submit" className="btn btn-primary" onClick={goBack}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItemPage;
