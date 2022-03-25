import './App.css';
import {useEffect, useState} from "react";

import {loadFromLocalStorage, saveToLocalStorage} from "./utils/localstorage";
import uuidGen from './utils/uuid'

import Headline from "./components/Headline";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskItemLeft from "./components/TaskItemLeft";
import TaskClearCompleted from "./components/TaskClearCompletedd";
import TaskButtons from "./components/TaskButtons";

function App() {
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState([]);
    const [selection, setSelection] = useState('all');

    useEffect(() => {
        setTasks(loadFromLocalStorage('tds'));
    }, []);

    useEffect(() => {
        saveToLocalStorage('tds', tasks)
    }, [tasks]);

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleKeyUp = (event) => {
        if (value !== '' || value !== ' ') {
            if (event.key === 'Enter') {
                setTasks([{
                    name: value,
                    id: uuidGen(),
                    status: false
                }, ...tasks]);
                // setTasks([])

                setValue('');
            }
        }
    }

    function handleChangeStatus(id) {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                task.status = !task.status
            }
            return task
        })

        setTasks(newTasks);
    }

    function handleDeleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    function handleDeleteDone() {
        setTasks(tasks.filter(task => !task.status))
    }

    return (
        <div className="App">
            <Headline/>
            <TaskInput value={value} handleChange={handleChange} handleKeyUp={handleKeyUp}/>
            {tasks.length === 0 ? ('') : (
                <>
                    <TaskList tasks={tasks} handleChangeStatus={handleChangeStatus} handleDeleteTask={handleDeleteTask}
                              selection={selection}/>

                    {/* TODO move to separate component (done)*/}
                    <TaskItemLeft tasks={tasks}/>

                    {/* TODO move to separate component (done)t*/}
                    <TaskButtons setSelection={setSelection}/>

                    {/* TODO move to separate component (done)*/}
                    <TaskClearCompleted tasks={tasks} handleDeleteDone={handleDeleteDone}/>
                </>
            )}


        </div>
    );
}

export default App;
