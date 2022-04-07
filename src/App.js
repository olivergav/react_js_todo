import './App.scss';
import {useEffect, useState} from "react";

import {collection, onSnapshot} from "firebase/firestore"

import Headline from "./components/Headline";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskItemLeft from "./components/TaskItemLeft";
import TaskClearCompleted from "./components/TaskClearCompletedd";
import TaskButtons from "./components/TaskButtons";
import {db} from "./firebase";

function App() {
    const [tasks, setTasks] = useState([]);
    const [selection, setSelection] = useState('all');

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
            setTasks(snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })))
        })

        return () => {
            unsubscribe();
        }
    }, []);


    return (
        <div className="App">
            <Headline/>
            <div className="container">
                <TaskInput/>
                {tasks.length === 0 ? ('') : (
                    <>
                        <TaskList tasks={tasks} selection={selection}/>

                        {/* TODO move to separate component (done)*/}
                        <TaskItemLeft tasks={tasks}/>

                        {/* TODO move to separate component (done)t*/}
                        <TaskButtons setSelection={setSelection}/>

                        {/* TODO move to separate component (done)*/}
                        <TaskClearCompleted tasks={tasks}/>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
