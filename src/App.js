import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import Dashboard from "./views/Dashboard";
import GuardedRoute from "./config/GuardedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <GuardedRoute path="/dashboard" component={Dashboard} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Redirect to="/dashboard" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
