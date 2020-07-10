import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import FakeError from './FakeError';
import classes from '../../Task4/Users/Users.module.css'

const ErrorEmitator = (props) => {
    return (
        <div>
            <div className={classes.container}>
                <h2>Fifth task to send AJAX-request with Error</h2>
            </div>
            <ErrorBoundary>
                <FakeError />
            </ErrorBoundary>
        </div>
    )
}
export default ErrorEmitator;