const getFirebaseData = () => {
    let allTasks = [];
    const createTaskStructure = require('./createTaskStructure');
    $.ajax({
        url: 'https://task-list-cf398.firebaseio.com/tasks.json?print=pretty',
        type: "GET",
        success: function (data) {
            const clearLanes = require('./clearLanes');
            const keys = Object.keys(data);
            keys.forEach(task => {
                let individualTask = {
                    key: task,
                    title: data[task].title,
                    details: data[task].details,
                    priority: data[task].priority,
                    lane: data[task].lane,
                }
                allTasks.push(individualTask)
            })
            createTaskStructure(allTasks)
        },
        error: function (error) {
            console.table(error)
        }
    });
    return allTasks;
}

module.exports = getFirebaseData;