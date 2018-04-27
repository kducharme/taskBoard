// Hides the task description when a user moves it into the completed lane
const completedTasks = (task) => {
    const onDrop = require('./onDrop');
    const description = task.childNodes[1];
    console.log(task)
    description.classList.add('hide')
}

module.exports = completedTasks;