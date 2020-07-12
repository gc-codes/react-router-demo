/* ROUTING DEMO
*  ------------
*  1. Install react-router-dom
*  2. In App.js import Route, BrowserRouter, NavLink, Switch from 'react-router-dom'
*  3. Enclose everything into <BrowserRouter>
*  4. Use <NavLink> component to define links
*  5. Use <Route> component to define various routes with specific components
*  6. Use :paramName syntax to pass parameters to the component
*/

import React from 'react'
import { Route, BrowserRouter as Router, NavLink, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ProfileComponent from './pages/Profile'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <div className="logo"></div>
          <div className="links">
            <NavLink to="/" exact activeClassName="highlight">Home</NavLink>
            <NavLink to="/about" activeClassName="highlight">About</NavLink>
            <NavLink to="/contact" activeClassName="highlight">Contact</NavLink>
            <NavLink to="/profile/12" activeClassName="highlight">Visit Your Profile</NavLink>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/profile/:profileId" component={ProfileComponent}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
