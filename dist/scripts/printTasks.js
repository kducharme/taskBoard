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

// const filterBySearch = (evt) => {
//     // const searchBox = document.querySelector('#searchTasks');
//     let matchArray = [];

//     const userEntry = evt.target.value //this get value of form

//     if (userEntry !== "") {
//         // Filter
//         allTasks.filter(t => {
//             const regex = new RegExp(userEntry, 'gi');

//         })
//         taskFactory()
//         // need to reset the dom
//     }
// }

// filterBySearch();

