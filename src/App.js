
import './App.css';
import Header from './header';
import Home from './home';
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Checkout from "./checkout"

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
          <Route path="/checkout">
      <Header />
        <Checkout/>
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
