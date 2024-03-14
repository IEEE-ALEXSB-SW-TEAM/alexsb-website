import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home.jsx';
import Events from './views/events.jsx';
import About from './views/about.jsx';

function Routers() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routers;