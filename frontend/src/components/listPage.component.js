import React from 'react';
import '../styles/index.css';
import axios from 'axios';
import { useState } from 'react';
import { getFromStorage } from '../utils/storage';
import { useEffect } from 'react';

function ListPage() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState('');
  const localStorage = getFromStorage('odis-token');

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="tasks-container">
      <div className="task-container">
        {taskList.map(task => {
          return (
            <div className="task" key={task._id}>
              <div
                className="task-description"
                style={{ textDecoration: task.finished ? 'line-through' : '' }}
              >
                {task.description}
              </div>
              <div id="done" className="action" onClick={() => markTask(task)}>
                ✓
              </div>
              <div
                id="delete"
                className="action"
                onClick={() => removeTask(task)}
              >
                -
              </div>
            </div>
          );
        })}
        <input
          value={task}
          type="text"
          placeholder="task description"
          onChange={onChangeTask}
        />
        <div id="add" className="action" onClick={addTask}>
          +
        </div>
      </div>
    </div>
  );

  function onChangeTask(e) {
    setTask(e.target.value);
  }

  function getTasks() {
    axios
      .get(
        process.env.REACT_APP_API_URL + '/api/tasks/' + localStorage.user._id
      )
      .then(res => {
        setTaskList(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function addTask() {
    if (task) {
      const newTask = {
        userid: localStorage.user._id,
        description: task
      };

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

  function removeTask(task) {
    axios
      .delete(process.env.REACT_APP_API_URL + '/api/tasks/' + task._id)
      .then(res => {
        const updatedTaskList = JSON.parse(JSON.stringify(taskList)).filter(
          task => task._id !== res.data
        );
        setTaskList(updatedTaskList);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function markTask(task) {
    axios
      .post(process.env.REACT_APP_API_URL + '/api/tasks/update/' + task._id, {
        finished: !task.finished
      })
      .then(res => {
        const updatedTaskList = JSON.parse(JSON.stringify(taskList)).filter(
          task => task._id !== res.data._id
        );
        updatedTaskList.push(res.data);

        setTaskList(updatedTaskList);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default ListPage;
