const getFromDB = () => {
    $.ajax({
        url: 'https://task-list-cf398.firebaseio.com/tasks.json?print=pretty',
        type: "GET",
        success: function (data) {
            allTasks.length = 0;
            parseData(data);
        },
        error: function (error) {
            console.table(error)
        }
    });
}

getFromDB()