const onDrop = (event, el) => {
    const draggableCards = require('./draggableCards');
    const countTasks = require('./countTasks');
    const moveTask = require('./moveTasks');
    
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const laneDrop = el.parentNode.childNodes[1].id
    const selectedTask = document.querySelector(`#${data}`);
    moveTask(laneDrop, selectedTask)
    
    if (laneDrop === 'tasks-complete') {
        const completedTasks = require('./completedTasks');
        completedTasks(selectedTask)
    }
    else {
        selectedTask.childNodes[1].classList.remove('hide');
    }
    el.appendChild(document.getElementById(data));
    countTasks();   
}

module.exports = onDrop;