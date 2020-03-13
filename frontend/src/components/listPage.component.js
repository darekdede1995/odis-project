import React from 'react';
import "../styles/index.css";
import axios from "axios";
import { useState } from 'react';
import { getFromStorage } from '../utils/storage';


function ListPage() {

    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');
    const localStorage = getFromStorage('odis-token');


    return (
        <div className="tasks-container">
            <div className="task-container">
                {taskList.map((task) => {
                    return <div className="task" key={task._id}>
                        <div className="task-description" >{task.description}</div>
                        <div id="done" className="action">✓</div>
                        <div id="delete" className="action">-</div>
                    </div>
                })}
                <input value={task} type="text" placeholder='task description' onChange={onChangeTask} />
                <div id="add" className="action" onClick={addTask}>+</div>
            </div>
        </div>
    );

    function onChangeTask(e) {
        setTask(e.target.value);
    }

    function addTask() {
        if (task) {
            const newTask = {
                userid: localStorage.user._id,
                description: task
            }

            axios
                .post(process.env.REACT_APP_API_URL + '/api/tasks/add', newTask)
                .then(res => {
                    setTask('');
                    const updatedTaskList = JSON.parse(JSON.stringify(taskList));
                    updatedTaskList.push(res.data);
                    setTaskList(updatedTaskList);
                })
                .catch(error => {
                    console.log(error);
                });

        }
    }
}

export default ListPage;
