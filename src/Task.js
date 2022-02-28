export const Task = ({id, taskName, dueDate, assignedTo}) => {
    return (
        <div className="Task">
            <h1>{id} {taskName}</h1>
            <h2>{dueDate}</h2>
            <p>{assignedTo}</p>
        </div>
    )
}