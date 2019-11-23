import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Example2 from "./components/Example2";

import { Home, Counter } from './components';
import Navbar from "./Navbar";
import Layout from "./Layout";

import './scss/index.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
         <Navbar />
         <Container>         
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/example1" component={Counter} />
            <Route path="/example2" component={Example2} />
          </Switch>
          </Container>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

const Container = ({ children }) => {
  return <div className="container">{children}</div>
}