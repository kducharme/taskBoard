let allTasks = [];

const saveToDB = (task) => {
    $.ajax({
        url: 'https://task-list-cf398.firebaseio.com/tasks.json',
        type: "POST",
        data: JSON.stringify(task),
        success: function () {
            console.log("success");
        },
        error: function (error) {
            console.log("error: " + error)
        }
    });
}

const getFromDB = () => {
    $.ajax({
        url: 'https://task-list-cf398.firebaseio.com/tasks.json?print=pretty',
        type: "GET",
        success: function (data) {
            allTasks.length = 0;
            parseData(data);
        },
        error: function (error) {
            console.table(error)
        }
    });
}

const updateDB = (taskUpdate) => {
    $.ajax({
        url: `https://task-list-cf398.firebaseio.com/tasks/${taskUpdate.key}.json`,
        type: "PATCH",
        data: JSON.stringify(taskUpdate),
        success: function () {
        },
        error: function (error) {
            console.table('error: ' + error)
        }
    });
}

const deleteTaskInDB = (key) => {
    $.ajax({
        url: `https://task-list-cf398.firebaseio.com/tasks/${key}.json`,
        type: "DELETE",
        data: JSON.stringify(key),
        success: function () {
        },
        error: function (error) {
            console.table('error: ' + error)
        }
    });
}

const taskFactory = () => {

    allTasks.forEach(task => {
        let name = task.title,
            details = task.details,
            priority = task.priority,
            priorityStyle = priorityStyling(priority),
            currentLane = task.lane,
            structure = taskStructure(),
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

        printTasks(structure, currentLane)
    })
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

const parseData = (data) => {
    const keys = Object.keys(data);

    keys.forEach(task => {
        let dataObj = {
            task: task,
            title: data[task].title,
            details: data[task].details,
            priority: data[task].priority,
            lane: data[task].lane,
        }
        allTasks.push(dataObj)
    })
    taskFactory()
}

getFromDB()