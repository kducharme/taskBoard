const createTaskStructure = (allTasks) => {
    const buttonFactory = require('./buttonFactory');
    const cardPriority = require('./priorityFactory');
    const draggableCards = require('./draggableCards');
    const taskID = require('./generatorFunctions');
    const printTasks = require('./printTasks');

    allTasks.forEach(t => {
        const task = draggableCards();
        const name = t.title;
        const details = t.details;
        const priorityStyle = cardPriority(t.priority);
        const viewButton = buttonFactory('button--expand', 'View', taskModal, 'hide');
        const headStructure = document.createElement('span');
        headStructure.classList.add('indiv-task-head');
        const currentLane = t.lane;
        const taskName = document.createElement('h2');
        const taskBody = document.createElement('p');
        
        taskName.textContent = name;
        taskBody.textContent = details;
        headStructure.appendChild(taskName);
        headStructure.appendChild(viewButton);
        task.setAttribute('id', `task__${taskID.next().value}`);
        task.appendChild(headStructure);
        task.appendChild(taskBody);
        task.appendChild(priorityStyle);

        printTasks(allTasks, task);
    })
}

module.exports = createTaskStructure;