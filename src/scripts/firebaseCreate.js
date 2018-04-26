const taskFactory = require('./taskFactory');

const saveToDB = (task) => {
    $.ajax({
        url: 'https://task-list-cf398.firebaseio.com/tasks.json',
        type: "POST",
        data: JSON.stringify(task),
        success: function () {
            console.log("success");
        },
        error: function (error) {
            console.log("error: " + error)
        }
    });
}


