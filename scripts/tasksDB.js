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

const parseData = (data) => {
    allTasks = []
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