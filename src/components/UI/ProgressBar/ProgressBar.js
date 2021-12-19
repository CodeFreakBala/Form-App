import React from 'react';
import classes from './ProgressBar.module.scss'


function ProgressBar(props) {

    const {stepVal} = props;
  return (
    <>
        <div className="row">
        <div className="">
            <div className={classes.wrapper_progressBar}>
            <ul className={classes.progressBar}>
                <li className={ stepVal ? [classes.active,classes.slided].join(" ") : classes.active}>
                    Step 1
                </li>
                <li className={ stepVal ? [classes.active,classes.slided].join(" ") : null}>
                    Step 2
                </li>
            </ul>
            </div>
        </div>
        </div>
    </>
  );
}

export default ProgressBar;
