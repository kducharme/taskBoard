
const taskModalData = (e) => {
    const task = e.path[2].childNodes;
    const taskName = task[0].childNodes[0].textContent;
    const taskDetails = task[1].textContent;
    
    showTaskModal(taskName, taskDetails);
}

const showTaskModal = (name, details) => {
    console.log(details)
    const modal = document.querySelector('#taskModal');
    const taskName = document.querySelector('#modalTaskTitle')
    const taskDescript = document.querySelector('#modalTaskDescription')

    taskName.setAttribute('contenteditable', true);
    taskDescript.setAttribute('contenteditable', true);

    taskName.textContent = name;
    taskDescript.textContent = details;

    modal.classList.toggle('hide');
}

const closeTaskModal = () => {
    const modal = document.querySelector('#taskModal');
    modal.classList.toggle('hide');
}

const clickModalClose = document.querySelector('#closeTaskModal').addEventListener('click', closeTaskModal)
