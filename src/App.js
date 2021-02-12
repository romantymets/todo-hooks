import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NawBar from "./NawBar/NawBar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePages/HomePage";
import TodoItemPage from "./pages/TodoItemPage/TodoItemPage";



function App() {
  return (
    <div className="container">
      <Router>
      <NawBar/>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/todoitem">
            <TodoItemPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
