import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { 
  Home, 
  MultipleStates, 
  FormFields, 
  Pagination, 
  TodoApp, 
  ContextApp,
  UseRefExample 
} from './components';
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
            <Route exact path="/useState" component={FormFields} />
            <Route exact path="/useState2" component={MultipleStates} />
            <Route exact path="/useEffect" component={Pagination} />
            <Route exact path="/useReducer" component={TodoApp} />
            <Route exact path="/useContext" component={ContextApp} />
            <Route exact path="/useRef" component={UseRefExample} />
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