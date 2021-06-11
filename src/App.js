import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
