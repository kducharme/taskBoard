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

module.exports = taskModal;

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
