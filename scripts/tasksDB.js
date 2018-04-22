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
            console.log('success - data received');
            parseData(data);
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
    
    const fragment = document.createDocumentFragment();
    allTasks.forEach(task => {

        let name = task.title,
            details = task.details,
            priority = task.priority,
            priorityStyle = priorityStyling(priority),
            structure = createTaskStructure(),
            headStructure = createHeadStructure(),
            taskName = document.createElement('h2'),
            taskBody = document.createElement('p'),
            button = createExpandButton();

        taskName.textContent = name;
        taskBody.textContent = details;

        headStructure.appendChild(taskName);
        headStructure.appendChild(button);
        structure.appendChild(headStructure);
        structure.appendChild(taskBody);
        structure.appendChild(priorityStyle);
        fragment.appendChild(structure)
    })
    backlog.appendChild(fragment)
    taskCount();
}

getFromDB()