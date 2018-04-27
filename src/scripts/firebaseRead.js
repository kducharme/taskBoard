const getFirebaseData = () => {
    const createTaskStructure = require('./createTaskStructure');
    $.ajax({
        url: 'https://task-list-cf398.firebaseio.com/tasks.json?print=pretty',
        type: "GET",
        success: function (data){
            parseData(data)  
        },
        error: function (error) {
            console.table(error)
        }
    });
}

const parseData = data => {
    let allTasks = [];
    const createTaskStructure = require('./createTaskStructure');
    //dont need the next line
    allTasks.length = 0;
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
    return allTasks;
}

module.exports = getFirebaseData;