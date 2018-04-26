const deleteTaskInDB = (key) => {
    $.ajax({
        url: `https://task-list-cf398.firebaseio.com/tasks/${key}.json`,
        type: "DELETE",
        data: JSON.stringify(key),
        success: function () {
        },
        error: function (error) {
            console.table('error: ' + error)
        }
    });
}