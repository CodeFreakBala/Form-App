import React from 'react';
import classes from './Card.module.scss'


function card(props) {
  return (
    <>
        <div className={classes.card}>
            {props.children}
        </div>
    </>
  );
}

export default card;
