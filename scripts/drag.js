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
    const laneDrop = e.path[0].id
    const selectedTask = document.querySelector(`#${data}`)
;   
    moveTask(laneDrop, selectedTask)
    
    el.appendChild(document.getElementById(data));
    taskCount();
    
}