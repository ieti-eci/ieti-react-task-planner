import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/home-page" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
