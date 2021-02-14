import Navbar from "./components/Navbar"
import Calendar from "./pages/Calendar";
import SignUp from "./pages/Signup"
import Login from "./pages/Login"
import UserStore from "./utils/UserStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import { UserContext } from "./utils/UserStore";


function App() {
  return (
    <div className="App">
      <UserStore>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/calendar/:email">
              <Calendar />
            </Route>
          </Switch>
        </Router>
      </UserStore>
    </div>
  );
}

export default App;
