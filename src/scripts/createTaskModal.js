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

    const stringed = JSON.stringify(task)

    saveToDB(task)
    clearFields();
    clearLanes();
    closeModal();
    getFromDB()
    taskCount();
}

const createNewTask = document.querySelector('#createTask').addEventListener('click', createTask)

const clearLanes = () => {
    // NEED: CLEAR ONLY THE LANE THAT HAS A CHANGE
    const backlog = document.querySelector('#tasks-backlog');
    const progress = document.querySelector('#tasks-progress');
    const review = document.querySelector('#tasks-review');
    const complete = document.querySelector('#tasks-complete');
    const lanes = [];
    lanes.push(backlog, progress, review, complete);

    lanes.forEach(lane => {
        while (lane.firstChild) {
            lane.removeChild(lane.firstChild);
        }
    })
}

