const getFirebaseData = () => {
    const firebaseParse = require('./firebaseParse');
    $.ajax({
        url: 'https://task-list-cf398.firebaseio.com/tasks.json?print=pretty',
        type: "GET",
        success: function (data) {
            firebaseParse(data)
        },
        error: function (error) {
            console.table(error)
        }
    });
}

module.exports = getFirebaseData;