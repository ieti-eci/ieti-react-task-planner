import "./css/App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import TaskForm from "./components/TaskForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/home-page" component={Home}></Route>
        <Route path="/task-info" component={TaskForm}></Route>
      </Switch>
    </Router>
  );
}

export default App;
