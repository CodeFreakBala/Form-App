import React from 'react';
import classes from './Header.module.scss'
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";

function Header() {
  return (
    <>
      <div className={classes.nav_bg}>
        <div className="container">
          <div className="row">
              <ul>
                <li>
                <NavLink activeclassname="active" to="/">Create</NavLink>
                </li>
                <li>
                <NavLink activeclassname="active" to="/list">List</NavLink>
                </li>
              </ul>
          </div>
        </div>
      </div>  
    </>
  );
}

export default Header;
