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
            console.log('success - data received');
        },
        error: function (error) {
            console.table('error: ' + error)
        }
    });
}

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
    postSavedTasks()
}

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
            button = createViewButton();

        taskName.textContent = name;
        taskBody.textContent = details;

        headStructure.appendChild(taskName);
        headStructure.appendChild(button);
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

getFromDB()