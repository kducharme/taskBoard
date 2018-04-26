(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Opens modal to create new task
const taskModal = () => {
    let modal = document.querySelector('#modal');
    close = document.querySelector('#closeModal').addEventListener('click', closeModal);
    const priorities = document.querySelectorAll('.priority');

    priorities.forEach(priority => {
        priority.addEventListener('click', stylePriority);
    })
    modal.classList.toggle('hide')
}

const addTask = document.querySelector('#addTask').addEventListener('click', taskModal);

// Closes modal after user clicks 'x' button
const closeModal = () => {
    let modal = document.querySelector('#modal');
    const priorities = document.querySelectorAll('.priority');
    modal.classList.toggle('hide');

    priorities.forEach(priority => {
        priority.classList.remove('selected')
        priority.classList.remove('not-selected')
    })
}

// Clears fields after the create task button is clicked
const clearFields = () => {
    const name = document.querySelector('#taskName');
    const details = document.querySelector('#taskDetails');

    name.value = "";
    details.value = "";
}

// Allows user to select priority of the task
const stylePriority = (e) => {
    const priorities = document.querySelectorAll('.priority');
    const selected = e.target;

    priorities.forEach(priority => {
        if (selected === priority) {
            priority.classList.add('selected')
            priority.classList.remove('not-selected')
        }
        else {
            priority.classList.remove('selected')
            priority.classList.add('not-selected')
        }
    })
}

// Creates an object for the task and triggers posting to DOM
const createTask = (e) => {
    const name = document.querySelector('#taskName').value;
    const details = document.querySelector('#taskDetails').value;
    const priorities = e.path[1].children[3].children[3].children; // Need to refactor this
    const priorityList = Array.prototype.slice.call(priorities, 0);
    const lane = '';
    let selected = '';

    priorityList.forEach(i => {
        if (i.classList[2] === 'selected') {
            selected = i.id;
        }
    })

    const task = Object.create({}, {
        title: { enumerable: true, writable: true, value: name },
        details: { enumerable: true, writable: true, value: details },
        priority: { enumerable: true, writable: true, value: selected },
        lane: { enumerable: true, writable: true, value: 'tasks-backlog' }
    })

    const stringed = JSON.stringify(task)

    saveToDB(task)
    clearFields();
    clearLanes();
    closeModal();
    getFromDB()
    taskCount();
}

const createNewTask = document.querySelector('#createTask').addEventListener('click', createTask)

const clearLanes = () => {
    // NEED: CLEAR ONLY THE LANE THAT HAS A CHANGE
    const backlog = document.querySelector('#tasks-backlog');
    const progress = document.querySelector('#tasks-progress');
    const review = document.querySelector('#tasks-review');
    const complete = document.querySelector('#tasks-complete');
    const lanes = [];
    lanes.push(backlog, progress, review, complete);

    lanes.forEach(lane => {
        while (lane.firstChild) {
            lane.removeChild(lane.firstChild);
        }
    })
}


},{}],2:[function(require,module,exports){
const deleteTask = (e) => {
    const task = e.path[3];
    const taskParent = e.parentNode;
    const taskTitle = task.childNodes[0].childNodes[0];
    const taskPriority = task.childNodes[2].classList[1];

    allTasks.forEach(task => {
        if (taskTitle.textContent === task.title && task.priority === taskPriority) {
            const key = task.task;
            // deleteTaskInDB(key)
        }
    })
}



},{}],3:[function(require,module,exports){
//Drag and drop functionality
const allowDrop = (event) => {
    const hoverLane = event.target.id;
    event.preventDefault();
    // event.dataTransfer.dropEffect = "copy";
}

const drag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
    // event.dataTransfer.effectAllowed = "copyMove";
}

const drop = (event, el) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const laneDrop = el.parentNode.childNodes[1].id
    const selectedTask = document.querySelector(`#${data}`);
    
    moveTask(laneDrop, selectedTask)

    if (laneDrop === 'tasks-complete') {
        completedTask(selectedTask)
    }
    else {
        selectedTask.childNodes[1].classList.remove('hide');
    }

    el.appendChild(document.getElementById(data));
    taskCount();
    
}
},{}],4:[function(require,module,exports){

const taskModalData = (e) => {
    const task = e.path[2].childNodes;
    const taskID = e.path[2].id;
    const taskName = task[0].childNodes[0].textContent;
    const taskDetails = task[1].textContent;
    showTaskModal(taskID, taskName, taskDetails);
    makeTaskChange(taskID, taskName, taskDetails);
}

const showTaskModal = (id, name, details) => {
    const modal = document.querySelector('#taskModal');
    const taskName = document.querySelector('#modalTaskTitle')
    const taskDescript = document.querySelector('#modalTaskDescription')

    taskName.setAttribute('contenteditable', true);
    taskDescript.setAttribute('contenteditable', true);
    taskName.textContent = name;
    taskDescript.textContent = details;
    modal.classList.toggle('hide');
}

const makeTaskChange = (id, name, details) => {
    const taskName = name;
    const taskID = id;
    const taskDetails = details;
}

const saveChanges = () => {

}

const saveTaskChanges = document.querySelector('#saveChanges').addEventListener('click', saveChanges)


const closeTaskModal = () => {
    const modal = document.querySelector('#taskModal');
    modal.classList.toggle('hide');
}

const clickModalClose = document.querySelector('#closeTaskModal').addEventListener('click', closeTaskModal)

},{}],5:[function(require,module,exports){
// const filterTasks = () => {
//     const printArea = document.querySelector('#filters');
//     // const search = createSearch();
//     const labelDropdown = filterByLabel();

//     printArea.appendChild(search)
//     printArea.appendChild(labelDropdown)
// }

const filterByLabel = () => {
    const dropdown = document.createElement('span');
    const placeholder = filterPlaceholder();
    dropdown.addEventListener('click', addLabelOptions)
    dropdown.setAttribute('id', 'filterStructure')
    dropdown.classList.add('filters__dropdown')
    dropdown.appendChild(placeholder)
    
    return dropdown
}

const filterPlaceholder = () => {
    const structure = document.createElement('span');
    const placeholder = document.createElement('p');
    const icon = document.createElement('p');
    placeholder.textContent = "Filter by label"
    icon.innerHTML = `<i class="material-icons dark-icon">arrow_drop_down</i>`
    structure.appendChild(placeholder)
    structure.appendChild(icon)
    structure.classList.add('filters__dropdown--placeholder')

    return structure;
}

const createFilterStructure = () => {
    const dropdown = document.querySelector('#filterStructure');
    const filters = ['Green', 'Red', 'Yellow', 'Blue', 'Orange'];
    dropdown.classList.toggle('filters__dropdown--click');
    const dropdownOptions = document.createElement('div')

}

const addLabelOptions = () => {
    const dropdown = document.querySelector('#filterStructure');
    dropdown.classList.toggle('filters__dropdown--click')
    const filters = ['Green', 'Red', 'Yellow', 'Blue', 'Orange']
    const dropdownOptions = document.createElement('div')
    dropdownOptions.classList.add('filters__dropdown--options')

    if (dropdown.childNodes.length === 1) {
        filters.forEach(filter => {
            const option = document.createElement('p');
            option.textContent = filter;
            dropdownOptions.appendChild(option)
        })
        dropdown.appendChild(dropdownOptions)
    }
    else {
        dropdown.childNodes[1].remove();
    }
}

// filterTasks();
},{}],6:[function(require,module,exports){
function* idMaker() {
    let index = 0;
    while (index < index + 1)
        yield index++;
}

const taskID = idMaker();
const buttonID = idMaker();
},{}],7:[function(require,module,exports){
// Hides the task description when a user moves it into the completed lane
const completedTask = (task) => {
    const description = task.childNodes[1];
    description.classList.add('hide')
}
},{}],8:[function(require,module,exports){
// Updates the lane in the task's object on drop
const moveTask = (lane, task) => {
    const taskTitle = task.childNodes[0].childNodes[0];
    const taskPriority = task.childNodes[2].classList[1]
    let newLane = lane;
    let taskKey;
    
    allTasks.forEach(task => {
        if (taskTitle.textContent === task.title) {
            const taskUpdate = {
                lane: newLane,
                key: task.task
            }
            updateDB(taskUpdate);
        }
    })
}



},{}],9:[function(require,module,exports){
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


},{}],10:[function(require,module,exports){
const taskStructure = () => {
    const structure = document.createElement('span');
    structure.setAttribute('draggable', 'true');
    structure.setAttribute('ondragstart', 'drag(event)');
    structure.setAttribute('ondrop', 'return false')
    structure.setAttribute('ondragover', 'return false')
    structure.setAttribute('id', `task__${taskID.next().value}`);
    structure.addEventListener('mouseenter', showEdit)
    structure.addEventListener('mouseleave', hideEdit)
    structure.classList.add('indiv-task', 'drag');

    return structure;
}

const taskFactory = () => {

    allTasks.forEach(task => {
        let name = task.title,
            details = task.details,
            priority = task.priority,
            priorityStyle = priorityStyling(priority),
            currentLane = task.lane,
            structure = taskStructure(),
            headStructure = createHeadStructure(),
            taskName = document.createElement('h2'),
            taskBody = document.createElement('p'),
            viewButton = createViewButton();

        taskName.textContent = name;
        taskBody.textContent = details;

        headStructure.appendChild(taskName);
        headStructure.appendChild(viewButton);
        structure.appendChild(headStructure);
        structure.appendChild(taskBody);
        structure.appendChild(priorityStyle);

        printTasks(structure, currentLane)
    })
}

const priorityStyling = (priority) => {
    const priorityStyle = document.createElement('span');
    priorityStyle.classList.add('card-priority')

    switch (priority) {
        case 'red':
            priorityStyle.classList.add('red')
            return priorityStyle;
            break;
        case 'orange':
            priorityStyle.classList.add('orange')
            return priorityStyle;
            break;
        case 'green':
            priorityStyle.classList.add('green')
            return priorityStyle;
            break;
        case 'blue':
            priorityStyle.classList.add('blue')
            return priorityStyle;
            break;
        case 'yellow':
            priorityStyle.classList.add('yellow')
            return priorityStyle;
            break;
    }
}

const createHeadStructure = () => {
    const structure = document.createElement('span');
    structure.classList.add('indiv-task-head');
    return structure;
}

const showEdit = (e) => {
    const viewButton = e.path[0].childNodes[0].childNodes[1]
    viewButton.classList.toggle('hide')
}

const hideEdit = (e) => {
    const viewButton = e.path[0].childNodes[0].childNodes[1]
    viewButton.classList.toggle('hide')
}

const createViewButton = () => {
    const button = document.createElement('button');
    button.textContent = 'View';
    button.setAttribute('id', `button__${buttonID.next().value}`);
    button.addEventListener('click', taskModalData);
    button.classList.add('button--expand');
    button.classList.add('hide');

    return button;
};

},{}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
let allTasks = [];

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

const taskFactory = () => {

    allTasks.forEach(task => {
        let name = task.title,
            details = task.details,
            priority = task.priority,
            priorityStyle = priorityStyling(priority),
            currentLane = task.lane,
            structure = taskStructure(),
            headStructure = createHeadStructure(),
            taskName = document.createElement('h2'),
            taskBody = document.createElement('p'),
            viewButton = createViewButton();

        taskName.textContent = name;
        taskBody.textContent = details;

        headStructure.appendChild(taskName);
        headStructure.appendChild(viewButton);
        structure.appendChild(headStructure);
        structure.appendChild(taskBody);
        structure.appendChild(priorityStyle);

        printTasks(structure, currentLane)
    })
}



const priorityStyling = (priority) => {
    const priorityStyle = document.createElement('span');
    priorityStyle.classList.add('card-priority')

    switch (priority) {
        case 'red':
            priorityStyle.classList.add('red')
            return priorityStyle;
            break;
        case 'orange':
            priorityStyle.classList.add('orange')
            return priorityStyle;
            break;
        case 'green':
            priorityStyle.classList.add('green')
            return priorityStyle;
            break;
        case 'blue':
            priorityStyle.classList.add('blue')
            return priorityStyle;
            break;
        case 'yellow':
            priorityStyle.classList.add('yellow')
            return priorityStyle;
            break;
    }
}

const createHeadStructure = () => {
    const structure = document.createElement('span');
    structure.classList.add('indiv-task-head');
    return structure;
}

const showEdit = (e) => {
    const viewButton = e.path[0].childNodes[0].childNodes[1]
    viewButton.classList.toggle('hide')
}

const hideEdit = (e) => {
    const viewButton = e.path[0].childNodes[0].childNodes[1]
    viewButton.classList.toggle('hide')
}

const createViewButton = () => {
    const button = document.createElement('button');
    button.textContent = 'View';
    button.setAttribute('id', `button__${buttonID.next().value}`);
    button.addEventListener('click', taskModalData);
    button.classList.add('button--expand');
    button.classList.add('hide');

    return button;
};

const parseData = (data) => {
    const keys = Object.keys(data);

    keys.forEach(task => {
        let dataObj = {
            task: task,
            title: data[task].title,
            details: data[task].details,
            priority: data[task].priority,
            lane: data[task].lane,
        }
        allTasks.push(dataObj)
    })
    taskFactory()
}

getFromDB()
},{}]},{},[1,2,3,4,5,6,7,8,9,11,10,12]);
