import Dexie from 'dexie';

export const db = new Dexie('ToDoAppDB');

db.version(1).stores({
    tasks: 
        `++id,
        taskName,
        dueDate,
        assignedTo`,
});