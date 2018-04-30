// Updates the lane in the task's object on drop
const moveTask = (lane, task) => {
    const firebaseParse = require('./firebaseParse');
    const firebaseUpdate = require('./firebaseUpdate');
    const key = task.id

    const taskUpdate = {
        key,
        lane
    }
    firebaseUpdate(taskUpdate);
}

module.exports = moveTask;