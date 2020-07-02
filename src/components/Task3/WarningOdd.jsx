import React from 'react';
import classes from '../GeneralStyles.module.css';
const WarningOdd = (props) => {
    return(
        <div className={classes.worning}>
            Sorry generated figure is {props.number}(ODD figure) </div>
    )
}
export default WarningOdd;