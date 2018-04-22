const deleteTask = () => {
    const taskTitle = task.childNodes[0].childNodes[0];
    const taskPriority = task.childNodes[2].classList[1]
    let newLane = lane;
    let taskKey;

    allTasks.forEach(task => {
        if (taskTitle.textContent === task.title && task.priority === taskPriority) {
            const taskUpdate = {
                lane: newLane,
                key: task.task
            }
            updateDB(taskUpdate);
        }
    })
}
