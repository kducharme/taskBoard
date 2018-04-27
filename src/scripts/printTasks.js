const printTasks = (allTasks) => {
    const countTasks = require('./countTasks');
    const completedTasks = require('./completedTasks');
    const createTaskStructure = require('./createTaskStructure');
    const backlog = document.querySelector('#tasks-backlog');
    const progress = document.querySelector('#tasks-progress');
    const review = document.querySelector('#tasks-review');
    const complete = document.querySelector('#tasks-complete');

    console.log(allTasks)

    allTasks.forEach(t => {
        console.log(t)
        const task = createTaskStructure(t);
        if (t.lane === 'tasks-backlog') {
            backlog.appendChild(task)
            console.log('backlog')
        }
        if (t.lane === 'tasks-progress') {
            progress.appendChild(task)
            console.log('progress')
        }
        if (t.lane === 'tasks-review') {
            review.appendChild(task)
            console.log('review')
        }
        if (t.lane === 'tasks-complete') {
            complete.appendChild(task)
            // completedTasks(task)
        }
    })
    // countTasks();
}

module.exports = printTasks;
