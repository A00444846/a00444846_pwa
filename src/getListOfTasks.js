import { useState, useEffect } from 'react'
import { db } from './db'
import { Task } from "./Task" 

function getAllTasksFromDB() {
    return db.tasks.toArray().then((data) => {
        return data
    })
}

export default function AdddTodo() {
    const [TasksList, setTasksList] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const Tasks = await getAllTasksFromDB()
        setTasksList(Tasks)
    }, [])
    return (
        <div>
            {TasksList ?
                TasksList.map((task, index) => <Task key={index} id={task.id} taskName={task.taskName} dueDate={task.dueDate} assignedTo={task.assignedTo} />)
                : "Loading..."}
        </div>
    )
}
