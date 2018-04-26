const parseData = (data) => {
    const taskFactory = require('./taskFactory');
    const keys = Object.keys(data);
    let allTasks = [];
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
    taskFactory(allTasks)
}

module.exports = parseData;