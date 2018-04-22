//Drag and drop functionality
const allowDrop = (e) => {
    const hoverLane = e.target.id;
    e.preventDefault();
}

const drag = (dragevent) => {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
}

const drop = (dropevent) => {
    dropevent.preventDefault();
    const newLane = dropevent.path[0].id;
    const data = dropevent.dataTransfer.getData("text");
    const selectedTask = document.querySelector(`#${data}`)

    moveTask(newLane, selectedTask)

    if (dropevent.target.id === 'tasks-complete') {
        completedTask(selectedTask);
    }
    else {
        selectedTask.childNodes[1].classList.remove('hide')
    }
    dropevent.target.appendChild(document.getElementById(data));
    taskCount();
}