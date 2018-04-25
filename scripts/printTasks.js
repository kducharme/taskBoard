let allTasks = []

const printTasks = (structure, lane) => {
    const backlog = document.querySelector('#tasks-backlog');
    const progress = document.querySelector('#tasks-progress');
    const review = document.querySelector('#tasks-review');
    const complete = document.querySelector('#tasks-complete');

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

const filterBySearch = () => {
    // const searchBox = document.querySelector('#searchTasks');
    // let matchArray = [];
    // if (searchBox === null) {
    //     printTasks(matchArray)
    // }
    // else {
    //     const regex = new RegExp(searchBox.value, 'gi');
    //     allTasks.forEach(task => {
    //         if (task.title.match(regex)) {
    //             matchArray.push(task);
    //             console.log(matchArray)
    //             printTasks(matchArray)
    //         }
    //     })
    // }
}

filterBySearch();

