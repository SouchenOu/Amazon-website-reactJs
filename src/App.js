
import './App.css';
import Header from './header';
import Home from './home';
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
          <Route path="/checkout">
      <Header />
        <h1>I am a checkout , Smach the like button</h1>
      </Route>
      <Route path='/'>
      <Header />
        <Home/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
