const updateDB = (taskUpdate) => {
    $.ajax({
        url: `https://task-list-cf398.firebaseio.com/tasks/${taskUpdate.key}.json`,
        type: "PATCH",
        data: JSON.stringify(taskUpdate),
        success: function () {
        },
        error: function (error) {
            console.table('error: ' + error)
        }
    });
}