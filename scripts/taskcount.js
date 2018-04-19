// Counts the total task count per lane
const taskCount = () => {
    const printTotal = document.querySelector('#totalBacklogTasks');
    const backlog = document.querySelector('#tasks-backlog');
    const progress = document.querySelector('#tasks-progress');
    const review = document.querySelector('#tasks-review');
    const complete = document.querySelector('#tasks-complete');
    const allLanes = [];
    const allCounts = [];
    
    allLanes.push(backlog, progress, review, complete)
    allLanes.forEach(lane => {
        let count = lane.childElementCount;
        allCounts.push(count)
    })
    printTaskCount(allCounts);
}

// Prints the total task count per lane
const printTaskCount = (tasks) => {
    const backlog = document.querySelector('#totalBacklogTasks');
    const progress = document.querySelector('#totalProgressTasks');
    const review = document.querySelector('#totalReviewTasks');
    const complete = document.querySelector('#totalCompletedTasks');
    const stylePage = []
    stylePage.push(backlog, progress, review, complete)

    stylePage.forEach(page => {
        page.classList.add('total-tasks')
    })

    backlog.textContent = `(${tasks[0]} total)`
    progress.textContent = `(${tasks[1]} total)`
    review.textContent = `(${tasks[2]} total)`
    complete.textContent = `(${tasks[3]} total)`
}

taskCount();