import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import GuardedRoute from "./config/GuardedRoute";
import Dashboard from "./views/Dashboard";


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
