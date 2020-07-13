import React from 'react';
import ErrorBoundary from "./components/Lesson 6/Task6/ErrorBoundary/ErrorBoundary";

// Import individual tasks
import Task1 from './components/Lesson 6/Task1';
import Task2 from "./components/Lesson 6/Task2";
import Task4 from './components/Lesson 6/Task4';
import Task5 from "./components/Lesson 6/Task5/Task5";
import Task6 from "./components/Lesson 6/Task6/Task6";
import Task7 from "./components/Lesson 6/Task7/Task7";
import Task8 from "./components/Lesson 6/Task8/Task8";
import Lesson7Task1 from './components/Lesson 7/Task1/Task 1';
import Lesson7Task2 from './components/Lesson 7/Task2/Task2';
import Lesson7Task3 from './components/Lesson 7/Task3/Task3';
import Lesson7Task4 from './components/Lesson 7/Task4/Task4';
import Lesson7Task5 from './components/Lesson 7/Task5/Task5';
import Lesson7Task6 from './components/Lesson 7/Task6/Task6';
import Lesson7Task7 from './components/Lesson 7/Task7/Task7';
import Lesson7Task8 from './components/Lesson 7/Task8/Task8';

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

            {/*<Task8/>*/}


            {/*------tasks for lesson 7-------*/}

            {/*<Lesson7Task1/>*/}
            {/*<Lesson7Task2/>*/}
            {/*<Lesson7Task3/>*/}
            {/*<Lesson7Task4/>*/}
            {/*<Lesson7Task5 display={true}/>*/}
            {/*<Lesson7Task6/>*/}
            {/*<Lesson7Task7/>*/}
            <Lesson7Task8/>
        </div>
    );
}

export default App;
