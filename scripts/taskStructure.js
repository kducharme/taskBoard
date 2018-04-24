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
    const viewButton = e.path[0].childNodes[0].childNodes[2]
    const deleteButton = e.path[0].childNodes[0].childNodes[1]
    viewButton.classList.toggle('hide')
    deleteButton.classList.toggle('hide')
    
}

const hideEdit = (e) => {
    const viewButton = e.path[0].childNodes[0].childNodes[2]
    const deleteButton = e.path[0].childNodes[0].childNodes[1]
    viewButton.classList.toggle('hide')
    deleteButton.classList.toggle('hide')
}

const createViewButton = () => {
    const button = document.createElement('button');
    button.textContent = 'View';
    button.setAttribute('id', `button__${buttonID.next().value}`);
    button.addEventListener('click', taskModalData);
    button.classList.add('button--expand');
    button.classList.add('hide');
    return button;
}

const createDeleteButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="material-icons delete">delete</i>';
    button.setAttribute('id', `delete`);
    button.addEventListener('click', deleteTask);
    button.classList.add('button--delete');
    button.classList.add('hide');
    return button;
}