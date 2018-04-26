// Hides the task description when a user moves it into the completed lane
const completedTask = (task) => {
    const description = task.childNodes[1];
    description.classList.add('hide')
}