// Hides the task description when a user moves it into the completed lane
const completedTasks = (task) => {
    const onDrop = require('./onDrop');
    const description = task.childNodes[1];
    description.classList.add('hide')
}
module.exports = completedTasks;