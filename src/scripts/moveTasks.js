// Updates the lane in the task's object on drop
const moveTask = (lane, task) => {
    const getFirebaseData = require('./firebaseRead');
    const taskTitle = task.childNodes[0].childNodes[0];
    const taskPriority = task.childNodes[2].classList[1]
    let newLane = lane;
    let taskKey;

    const data = getFirebaseData();

    console.log(data)
    
    data.forEach(task => {
        if (taskTitle.textContent === task.title) {
            const taskUpdate = {
                lane: newLane,
                key: task.task
            }
            updateDB(taskUpdate);
        }
    })
}

module.exports = moveTask;