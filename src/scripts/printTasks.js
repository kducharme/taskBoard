const printTasks = (allTasks) => {
    const countTasks = require('./countTasks');
    const completedTasks = require('./completedTasks');
    const createTaskStructure = require('./createTaskStructure');
    const backlog = document.querySelector('#tasks-backlog');
    const progress = document.querySelector('#tasks-progress');
    const review = document.querySelector('#tasks-review');
    const complete = document.querySelector('#tasks-complete');

    allTasks.forEach(t => {
        const task = createTaskStructure(t);
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
            const completedTasks = require('./completedTasks');
            complete.appendChild(task)
            completedTasks(task)
        }
    })
    countTasks();
}

module.exports = printTasks;
