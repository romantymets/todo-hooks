import React from 'react';
import TodoContainers from "./containers/Todo/TodoContainer"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container">
    <TodoContainers/>
    </div>
  );
}

export default App;
