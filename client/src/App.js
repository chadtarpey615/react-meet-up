import Navbar from "./components/Navbar"
import Calendar from "./components/Calendar";
import SignUp from "./pages/Signup"
import Login from "./pages/Login"
import UserStore from "./utils/UserStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import { UserContext } from "./utils/UserStore";


function App() {
  return (
    <div className="App">
      <Navbar />
      <UserStore>
        <Router>
          <Switch>
            <Route exact path="/">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/calendar">
              <Calendar />
            </Route>
          </Switch>
        </Router>
      </UserStore>
    </div>
  );
}

export default App;
