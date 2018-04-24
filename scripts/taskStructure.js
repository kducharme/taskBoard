const postSavedTasks = () => {
    const backlog = document.querySelector('#tasks-backlog');
    const progress = document.querySelector('#tasks-progress');
    const review = document.querySelector('#tasks-review');
    const complete = document.querySelector('#tasks-complete');

    allTasks.forEach(task => {

        let name = task.title,
            details = task.details,
            priority = task.priority,
            priorityStyle = priorityStyling(priority),
            currentLane = task.lane,
            structure = createTaskStructure(),
            headStructure = createHeadStructure(),
            taskName = document.createElement('h2'),
            taskBody = document.createElement('p'),
            viewButton = createViewButton();

        taskName.textContent = name;
        taskBody.textContent = details;

        headStructure.appendChild(taskName);
        headStructure.appendChild(viewButton);
        structure.appendChild(headStructure);
        structure.appendChild(taskBody);
        structure.appendChild(priorityStyle);

        if (currentLane === 'tasks-backlog') {
            backlog.appendChild(structure)
        }
        if (currentLane === 'tasks-progress') {
            progress.appendChild(structure)
        }
        if (currentLane === 'tasks-review') {
            review.appendChild(structure)
        }
        if (currentLane === 'tasks-complete') {
            complete.appendChild(structure)
            completedTask(structure)
        }
        
    })

    taskCount();
}

const priorityStyling = (priority) => {
    const priorityStyle = document.createElement('span');
    priorityStyle.classList.add('card-priority')

    switch (priority) {
        case 'red':
            priorityStyle.classList.add('red')
            return priorityStyle;
            break;
        case 'orange':
            priorityStyle.classList.add('orange')
            return priorityStyle;
            break;
        case 'green':
            priorityStyle.classList.add('green')
            return priorityStyle;
            break;
        case 'blue':
            priorityStyle.classList.add('blue')
            return priorityStyle;
            break;
        case 'yellow':
            priorityStyle.classList.add('yellow')
            return priorityStyle;
            break;
    }
}

const createTaskStructure = () => {
    const structure = document.createElement('span');
    structure.setAttribute('draggable', 'true');
    structure.setAttribute('ondragstart', 'drag(event)');
    structure.setAttribute('ondrop', 'return false')
    structure.setAttribute('ondragover', 'return false')
    structure.setAttribute('id', `task__${taskID.next().value}`);
    structure.addEventListener('mouseenter', showEdit)
    structure.addEventListener('mouseleave', hideEdit)
    structure.classList.add('indiv-task', 'drag');

    return structure;
}

const createHeadStructure = () => {
    const structure = document.createElement('span');
    structure.classList.add('indiv-task-head');
    return structure;
}

const showEdit = (e) => {
    const viewButton = e.path[0].childNodes[0].childNodes[1]
    viewButton.classList.toggle('hide')
}

const hideEdit = (e) => {
    const viewButton = e.path[0].childNodes[0].childNodes[1]
    viewButton.classList.toggle('hide')
}

const createViewButton = () => {
    const button = document.createElement('button');
    button.textContent = 'View';
    button.setAttribute('id', `button__${buttonID.next().value}`);
    button.addEventListener('click', taskModalData);
    button.classList.add('button--expand');
    button.classList.add('hide');

    return button;
};