import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home.js";
import Activities from "./views/activities.js";
import Login from "./views/login.js";
import Join from "./views/join.js";
import Contact from "./views/contact.js";
import Protons from "./views/protons.js"

function Routers() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/activities" component={Activities} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
          <Route path="/contact" component={Contact} />
          <Route path="/protons" component={Protons} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routers;
