const showTaskModal = (e) => {
    console.log('hi')
    const modal = document.querySelector('#taskModal');
    const taskName = document.querySelector('#modalTaskTitle')
    const taskDescript = document.querySelector('#modalTaskDescription')
    const task = e.path[2].childNodes;
    const taskID = e.path[2].id;
    const name = task[0].childNodes[0].textContent;
    const details = task[1].textContent;

    taskName.setAttribute('contenteditable', true);
    taskDescript.setAttribute('contenteditable', true);

    taskName.textContent = name;

    taskDescript.textContent = details;
    modal.classList.toggle('hide');
}

module.exports = showTaskModal;

const closeTaskModal = () => {
    const modal = document.querySelector('#taskModal');
    modal.classList.toggle('hide');
}

const clickModalClose = document.querySelector('#closeTaskModal').addEventListener('click', closeTaskModal)
