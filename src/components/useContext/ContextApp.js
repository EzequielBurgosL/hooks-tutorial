import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Home, About, Profile } from "./pages";
import { UserContext } from "./UserContext";

import './ContextApp.scss';

function ContextApp() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="contextApp">      
      <Router>
        <UserContext.Provider value={value}>
        {/* <UserContext.Provider value={'hello from context'}> */}
        <header className="contextApp-header">
          <h1>Context App</h1>
          <nav className="contextApp-header-links">
            <ul>
              <li>
                <Link to="/useContext/Home"><p>Home</p></Link>
              </li>
              <li>
                <Link to="/useContext/About"><p>About</p></Link>
              </li>
              <li>
                <Link to="/useContext/Profile"><p>Profile</p></Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/useContext/Home" component={Home} />
          <Route exact path="/useContext/About" component={About} />
          <Route exact path="/useContext/Profile" component={Profile} />
        </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default ContextApp;