import React from 'react';
import './App.css';
import Form from './LoginPage/Main';
import Home from './Navigation/Home';
import Images from './Navigation/Images';
import Posts from './Navigation/Posts';
import Albums from './Navigation/Albums';
import Navpages from './Navigation/Navpages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App () {
  return (
    <Router>
        <div className="App">
        <Navpages />
            <Switch>
              <Route path="/" exact component={Form} />
              <Route path="/Home" component={Home} />
              <Route path="/Images" component={Images} />
              <Route path="/Posts" component={Posts} />
              <Route path="/Albums" component={Albums} />
            </Switch>
        </div>
    </Router>
  );
}


export default App;