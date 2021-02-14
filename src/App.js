import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePages/HomePage";
import TodoItemPage from "./pages/TodoItemPage/TodoItemPage";



function App() {
  return (
    <div className="container">
      <Router>
      <NavBar/>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/todoitem:_id">
            <TodoItemPage />
          </Route>
          <Route  exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
