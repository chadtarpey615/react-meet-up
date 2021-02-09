import Navbar from "./components/Navbar"
import Calendar from "./components/Calendar";
import SignUp from "./pages/Signup"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <SignUp />
          </Route>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
