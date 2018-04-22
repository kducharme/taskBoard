//Drag and drop functionality
const allowDrop = (e) => {
    const hoverLane = e.target.id;
    e.preventDefault();
}

const drag = (dragevent) => {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
}

const drop = (e, el) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const newLane = e.path[2].id;
    const selectedTask = document.querySelector(`#${data}`)
;   
    moveTask(newLane, selectedTask)
    console.log(e.target.id)
    
    if (newLane === 'tasks-complete' || e.target.id === 'tasks-complete') {
        completedTask(selectedTask);
    }
    else {
        selectedTask.childNodes[1].classList.remove('hide')
    }
    
    el.appendChild(document.getElementById(data));
    taskCount();
}