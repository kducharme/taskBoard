//Drag and drop functionality
const allowDrop = (event) => {
    const hoverLane = event.target.id;
    event.preventDefault();
    // event.dataTransfer.dropEffect = "copy";
}

const drag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
    // event.dataTransfer.effectAllowed = "copyMove";
}

const drop = (event, el) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const laneDrop = el.parentNode.childNodes[1].id
    const selectedTask = document.querySelector(`#${data}`);
    
    moveTask(laneDrop, selectedTask)

    if (laneDrop === 'tasks-complete') {
        completedTask(selectedTask)
    }
    else {
        selectedTask.childNodes[1].classList.remove('hide');
    }

    el.appendChild(document.getElementById(data));
    taskCount();
    
}