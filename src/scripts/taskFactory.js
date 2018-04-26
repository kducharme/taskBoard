const buttonFactory = require('./buttonFactory');
const cardPriority = require('./cardPriority');
const draggableCards = require('./draggableCards');

/* 
NEEDS:
1. Get called by laneBuilder
*/

const constructTask = (task) => {

    allTasks.forEach(task => {
        const name = task.title;
        const details = task.details;
        const structure = taskStructure();
        const priorityStyle = priorityStyling(task.priority);
        const viewButton = createViewButton('button-expand', 'View', taskModalData, 'hide');
        const headStructure = document.createElement('span');
        structure.classList.add('indiv-task-head');
        const currentLane = task.lane;
        const taskName = document.createElement('h2');
        const taskBody = document.createElement('p');

        taskName.textContent = name;
        taskBody.textContent = details;
        headStructure.appendChild(taskName);
        headStructure.appendChild(viewButton);
        structure.appendChild(headStructure);
        structure.appendChild(taskBody);
        structure.appendChild(priorityStyle);

        return
    })
}

const showEdit = (e) => {
    const viewButton = e.path[0].childNodes[0].childNodes[1]
    viewButton.classList.toggle('hide')
}

const hideEdit = (e) => {
    const viewButton = e.path[0].childNodes[0].childNodes[1]
    viewButton.classList.toggle('hide')
}