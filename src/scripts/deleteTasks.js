const deleteTask = (e) => {
    const task = e.path[3];
    const taskParent = e.parentNode;
    const taskTitle = task.childNodes[0].childNodes[0];
    const taskPriority = task.childNodes[2].classList[1];

    allTasks.forEach(task => {
        if (taskTitle.textContent === task.title && task.priority === taskPriority) {
            const key = task.task;
            // deleteTaskInDB(key)
        }
    })
}


