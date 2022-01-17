import './App.css';
import CreateComponent from './containers/Create/Create';
import ListComponent from './containers/List/List';
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
        <Routes >
          <Route path="/list" element={<ListComponent />} />
          <Route exact path="/" element={<CreateComponent />} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
