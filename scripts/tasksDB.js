const saveToDB = (task) => {
    $.ajax({
        url:'https://task-list-cf398.firebaseio.com/tasks.json',
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

const getFromDB = () => {
    $.ajax({
        url: 'https://task-list-cf398.firebaseio.com/tasks.json?print=pretty',
        type: "GET",
        success: function (data) {
            console.log('success - data received');
            parseData(data);
        },
        error: function (error) {
            console.table('error: ' + error)
        }
    });
}

const parseData = (data) => {
    console.log(data)
    let post = data;
    let keys = Object.keys(post);

    for (var i = 0; i < keys.length; i++) {
        let k = keys[i]
        let dataObj = {
            k: k,
            title: post[k].title,
            content: post[k].body,
            author: post[k].author,
            date: post[k].date
        }
        allPosts.push(dataObj)
    }
    sortPost(allPosts)
}

getFromDB()