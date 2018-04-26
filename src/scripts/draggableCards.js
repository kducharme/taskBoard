const draggableCards = () => {
    const structure = document.createElement('span');
    structure.setAttribute('draggable', 'true');
    structure.setAttribute('ondragstart', 'drag(event)');
    structure.setAttribute('ondrop', 'return false')
    structure.setAttribute('ondragover', 'return false')
    structure.addEventListener('mouseenter', showEdit)
    structure.addEventListener('mouseleave', hideEdit)
    structure.classList.add('indiv-task', 'drag');

    return structure;
}

module.exports = draggableCards;