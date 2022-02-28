import React from 'react';
import { useState, useRef } from 'react'
import { db } from './db'

function HeaderStudent() {
    const [taskName, setTaskName] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [assignedTo, setAssignedTo] = useState("");

    const submitForm = async () => {
        await addTaskToDB(taskName, dueDate, assignedTo)
    }

    return (
        <div>
            <form>
                <table>
                <tr>
                    <td>Task Name</td>
                    <td>
                        <input
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder="Task Name"
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>Due Date</td>
                    <td>
                        <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        placeholder="dd/mm/yyyy"
                    />
                    </td>
                  </tr>
                  <tr>
                    <td>Assigned To</td>
                    <td>
                        <input
                        type="text"
                        value={assignedTo}
                        onChange={(e) => setAssignedTo(e.target.value)}
                        placeholder="The name of the task assignee"
                    />
                    </td>
                  </tr>
                <br/>
                <button onClick={() => submitForm()}>Add ToDo</button>
                </table>
            </form>
        </div>
    )
}

export default HeaderStudent;

function addTaskToDB(taskName, dueDate, assignedTo) {
  console.log(taskName, dueDate, assignedTo);
  db.tasks.put({taskName, dueDate, assignedTo})
      .then(() => true)
      .catch(err => {
          alert("Error: " + err)
      })
    }