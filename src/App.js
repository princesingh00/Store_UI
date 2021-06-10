import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Signin from "./components/Signin";
import Dashboard from "./views/Dashboard";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
