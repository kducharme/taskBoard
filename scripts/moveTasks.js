// Updates the lane in the task's object on drop
const moveTask = (lane, task) => {
    const taskTitle = task.childNodes[0].childNodes[0];
    const taskPriority = task.childNodes[2].classList[1]
    const newLane = lane;
    
    allTasks.forEach(task => {
        if (taskTitle.textContent === task.title && task.priority === taskPriority) {
            task.lane = newLane;
            console.log(allTasks)
        
        }
    })
}