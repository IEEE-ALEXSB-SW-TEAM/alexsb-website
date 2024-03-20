import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home.js';
import Events from './views/events.js';
import About from './views/about.js';
import NavBar from './components/NavigationBar/NavigationBar.js';
import Footer from './components/footer/footer.js';

function Routers() {
  return (
    <Router>
      <div>
        <div><NavBar /></div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
        </Switch>
        <div><Footer/></div>
      </div>
    </Router>
  );
}

export default Routers;