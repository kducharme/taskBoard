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
    let data = dropevent.dataTransfer.getData("text");
    let selectedCard = document.querySelector(`#${data}`)

    if (dropevent.target.id === 'tasks-complete') {
        completedTask(selectedCard);
    }
    else {
        selectedCard.childNodes[1].classList.remove('hide')
    }

    dropevent.target.appendChild(document.getElementById(data));
    taskCount();
}