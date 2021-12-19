import React from 'react';
import classes from './Header.module.scss'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Header() {
  return (
    <>
      <div className={classes.nav_bg}>
        <div className="container">
          <div className="row">
              <ul>
                <li>
                  <Link to="/">Create</Link>
                </li>
                <li>
                  <Link to="/list">List</Link>
                </li>
                <li>
                  <Link to="/edit">Edit</Link>
                </li>
              </ul>
          </div>
        </div>
      </div>  
    </>
  );
}

export default Header;
