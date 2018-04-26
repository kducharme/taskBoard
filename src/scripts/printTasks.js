const printTasks = (allTasks, task) => {
    const countTasks = require('./countTasks');
    const completedTasks = require('./completedTasks');
    const backlog = document.querySelector('#tasks-backlog');
    const progress = document.querySelector('#tasks-progress');
    const review = document.querySelector('#tasks-review');
    const complete = document.querySelector('#tasks-complete');

    allTasks.forEach(t => {
        if (t.lane === 'tasks-backlog') {
            backlog.appendChild(task)
        }
        if (t.lane === 'tasks-progress') {
            progress.appendChild(task)
        }
        if (t.lane === 'tasks-review') {
            review.appendChild(task)
        }
        if (t.lane === 'tasks-complete') {
            complete.appendChild(task)
            completedTasks(task)
        }
    })
    countTasks();
}

module.exports = printTasks;
