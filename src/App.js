import './App.css';
import CreateComponent from './containers/CreateContact/CreateContact';
import ListComponent from './containers/ListContact/ListContact';
import Header from './components/Header/Header';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
       <Header />
      <div>
        {/* A <Routes > looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes >
          <Route path="/list" element={<ListComponent />} />
          <Route exact path="/" element={<CreateComponent />} />
        </Routes >
      </div>
     
    </Router>
  );
}

export default App;
