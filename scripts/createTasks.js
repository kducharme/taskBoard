// Opens modal to create new task
const taskModal = () => {
    let modal = document.querySelector('#modal');
    close = document.querySelector('#closeModal').addEventListener('click', closeModal);
    const priorities = document.querySelectorAll('.priority');

    priorities.forEach(priority => {
        priority.addEventListener('click', stylePriority);
    })
    modal.classList.toggle('hide')
}

const addTask = document.querySelector('#addTask').addEventListener('click', taskModal);

// Closes modal after user clicks 'x' button
const closeModal = () => {
    let modal = document.querySelector('#modal');
    const priorities = document.querySelectorAll('.priority');
    modal.classList.toggle('hide');

    priorities.forEach(priority => {
        priority.classList.remove('selected')
        priority.classList.remove('not-selected')
    })
}

// Clears fields after the create task button is clicked
const clearFields = () => {
    const name = document.querySelector('#taskName');
    const details = document.querySelector('#taskDetails');

    name.value = "";
    details.value = "";
}

// Allows user to select priority of the task
const stylePriority = (e) => {
    const priorities = document.querySelectorAll('.priority');
    const selected = e.target;

    priorities.forEach(priority => {
        if (selected === priority) {
            priority.classList.add('selected')
            priority.classList.remove('not-selected')
        }
        else {
            priority.classList.remove('selected')
            priority.classList.add('not-selected')
        }
    })
}

// Creates an object for the task and triggers posting to DOM
const createTask = (e) => {
    const name = document.querySelector('#taskName').value;
    const details = document.querySelector('#taskDetails').value;
    const priorities = e.path[1].children[3].children[3].children; // Need to refactor this
    const priorityList = Array.prototype.slice.call(priorities, 0);
    let selected = '';
    let progress = '';

    priorityList.forEach(i => {
        if (i.classList[2] === 'selected') {
            selected = i.id;
        }
    })

    const task = Object.create({}, {
        title: { writable: true, value: name },
        details: { writable: true, value: details },
        priority: { writable: true, value: selected },
        progress: { writable: true, value: progress }
    })

    clearFields();
    allTasks.push(task);
    postTask(task)
    closeModal();
    taskCount();
}

const createNewTask = document.querySelector('#createTask').addEventListener('click', createTask)

const setPriority = (priority) => {
    return priority
}

// Posts tasks to the DOM
const postTask = (task) => {
    let name = task.title,
        details = task.details,
        priority = task.priority,
        structure = createTaskStructure(),
        headStructure = createHeadStructure(),
        taskName = document.createElement('h2'),
        taskBody = document.createElement('p'),
        backlog = document.querySelector('#tasks-backlog'),
        button = createExpandButton();

    taskName.textContent = name;
    taskBody.textContent = details;

    headStructure.appendChild(taskName);
    headStructure.appendChild(button);
    structure.appendChild(headStructure);
    structure.appendChild(taskBody);
    backlog.appendChild(structure)
}

const createTaskStructure = () => {
    const structure = document.createElement('span');
    structure.setAttribute('draggable', 'true');
    structure.setAttribute('ondragstart', 'drag(event)');
    structure.setAttribute('id', `task__${taskID.next().value}`);
    structure.classList.add('indiv-task', 'drag');
    return structure;
}

const createHeadStructure = () => {
    const structure = document.createElement('span');
    structure.classList.add('indiv-task-head');
    return structure;
}

const createExpandButton = () => {
    const button = document.createElement('button');
    button.textContent = 'Edit';
    button.setAttribute('id', `button__${buttonID.next().value}`);
    button.addEventListener('click', taskModalData);
    button.classList.add('button--expand');
    return button;
}

