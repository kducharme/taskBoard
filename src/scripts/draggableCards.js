const showEdit = (e) => {
    const viewButton = e.path[0].childNodes[0].childNodes[1]
    viewButton.classList.toggle('hide')
}

const hideEdit = (e) => {
    const viewButton = e.path[0].childNodes[0].childNodes[1]
    viewButton.classList.toggle('hide')
}

const draggableCards = () => {
    const allowDrag = require('./allowDrag');
    const structure = document.createElement('span');
    structure.setAttribute('draggable', 'true');
    structure.addEventListener('dragstart', function() {
        event.dataTransfer.setData('text', event.target.id);
    });
    structure.addEventListener('mouseenter', showEdit)
    structure.addEventListener('mouseleave', hideEdit)
    structure.classList.add('indiv-task', 'drag');

    return structure;
}

module.exports = draggableCards;

    // structure.setAttribute('ondrop', 'return false')
    // structure.setAttribute('ondragover', 'return false')