const filterBySearch = (evt) => {
    // const searchBox = document.querySelector('#searchTasks');
    let matchArray = [];

    const userEntry = evt.target.value //this get value of form

    if (userEntry !== "") {
        // Filter
        allTasks.filter(t => {
            const regex = new RegExp(userEntry, 'gi');

        })
        taskFactory()
        // need to reset the dom
    }
}

module.exports = filterBySearch;