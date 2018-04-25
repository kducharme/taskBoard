let allTasks = []

const printTasks = (currentLane, structure) => {
    const backlog = document.querySelector('#tasks-backlog');
    const progress = document.querySelector('#tasks-progress');
    const review = document.querySelector('#tasks-review');
    const complete = document.querySelector('#tasks-complete');
    const searchTerm = searchTasks();
    const lane = currentLane;

    allTasks.forEach(task => {

        if (lane === 'tasks-backlog') {
            backlog.appendChild(structure)
        }
        if (lane === 'tasks-progress') {
            progress.appendChild(structure)
        }
        if (lane === 'tasks-review') {
            review.appendChild(structure)
        }
        if (lane === 'tasks-complete') {
            complete.appendChild(structure)
            completedTask(structure)
        }
    })
    taskCount();
}