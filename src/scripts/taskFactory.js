const buttonFactory = require('./buttonFactory');
const cardPriority = require('./cardPriorityFactory');
const draggableCards = require('./draggableCards');
const allTasks = require('./firebaseRead');

/* NEEDS:
1. Get called by laneBuilder
*/

const taskFactory = (task) => {

    allTasks.forEach(t => {
        const task = makeCardsDraggable();
        const name = t.title;
        const details = t.details;
        const priorityStyle = priorityStyling(t.priority);
        const viewButton = createViewButton('button-expand', 'View', taskModalData, 'hide');
        const headStructure = document.createElement('span');
        structure.classList.add('indiv-task-head');
        const currentLane = t.lane;
        const taskName = document.createElement('h2');
        const taskBody = document.createElement('p');

        taskName.textContent = name;
        taskBody.textContent = details;
        headStructure.appendChild(taskName);
        headStructure.appendChild(viewButton);
        task.appendChild(headStructure);
        task.appendChild(taskBody);
        task.appendChild(priorityStyle);

        return task;
    })
}

module.exports = taskFactory;

const showEdit = (e) => {
    const viewButton = e.path[0].childNodes[0].childNodes[1]
    viewButton.classList.toggle('hide')
}

const hideEdit = (e) => {
    const viewButton = e.path[0].childNodes[0].childNodes[1]
    viewButton.classList.toggle('hide')
}