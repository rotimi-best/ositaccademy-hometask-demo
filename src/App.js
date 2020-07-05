import React from 'react';
import ErrorBoundary from "./components/Task6/ErrorBoundary/ErrorBoundary";

// Import individual tasks
import Task1 from './components/Task1';
import Task2 from "./components/Task2";
import Task4 from './components/Task4';
import Task5 from "./components/Task5/Task5";
import Task6 from "./components/Task6/Task6";
import Task7 from "./components/Task7/Task7";
import Task8 from "./components/Task8/Task8";

function App() {
    return (
        <div className="App">

            {/* <Task1 />*/}

            {/* <Task2 />*/}

            {/*<Task4 min='1' max='89'/>*/}

            {/*<Task5/>*/}

            {/*<ErrorBoundary>*/}
            {/*    <Task6/>*/}
            {/*</ErrorBoundary>*/}

            {/*<Task7/>*/}

            <Task8/>
        </div>
    );
}

export default App;
