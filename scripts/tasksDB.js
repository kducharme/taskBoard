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
    console.log(keys)

    keys.forEach(task => {
        let k = keys[task]
        let dataObj = {
            k: k,
            title: task[k].title,
            content: task[k].details,
            author: task[k].priority
        }
        allTasks.push(dataObj)
    })
}

getFromDB()