// Creates an object for the task and triggers posting to DOM
const createTask = (e) => {
    const name = document.querySelector('#taskName').value;
    const details = document.querySelector('#taskDetails').value;
    const priorities = e.path[1].children[3].children[3].children; // Need to refactor this
    const priorityList = Array.prototype.slice.call(priorities, 0);
    const lane = '';
    let selected = '';

    priorityList.forEach(i => {
        if (i.classList[2] === 'selected') {
            selected = i.id;
        }
    })

    const task = Object.create({}, {
        title: { enumerable: true, writable: true, value: name },
        details: { enumerable: true, writable: true, value: details },
        priority: { enumerable: true, writable: true, value: selected },
        lane: { enumerable: true, writable: true, value: 'tasks-backlog' }
    })

    const firebaseCreate = require('./firebaseCreate');
    firebaseCreate(task);
    clearFields();
    clearLanes();
    closeModal();
    getFromDB();
    taskCount();
}

const createNewTask = document.querySelector('#createTask').addEventListener('click', createTask)
