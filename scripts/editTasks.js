
const taskModalData = (e) => {
    const task = e.path[2].childNodes;
    const taskID = e.path[2].id;
    const taskName = task[0].childNodes[0].textContent;
    const taskDetails = task[1].textContent;
    showTaskModal(taskID, taskName, taskDetails);
    makeTaskChange(taskID, taskName, taskDetails);

    console.log(allTasks)
}

const showTaskModal = (id, name, details) => {
    const modal = document.querySelector('#taskModal');
    const taskName = document.querySelector('#modalTaskTitle')
    const taskDescript = document.querySelector('#modalTaskDescription')

    taskName.setAttribute('contenteditable', true);
    taskDescript.setAttribute('contenteditable', true);
    taskName.textContent = name;
    taskDescript.textContent = details;
    modal.classList.toggle('hide');
}

const makeTaskChange = (id, name, details) => {
    const taskName = name;
    const taskID = id;
    const taskDetails = details;
}

const saveChanges = () => {

}

const saveTaskChanges = document.querySelector('#saveChanges').addEventListener('click', saveChanges)


const closeTaskModal = () => {
    const modal = document.querySelector('#taskModal');
    modal.classList.toggle('hide');
}

const clickModalClose = document.querySelector('#closeTaskModal').addEventListener('click', closeTaskModal)
