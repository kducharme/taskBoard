const laneSetup = () => {
    const allowDrop = require('./allowDrop');
    const onDrop = require('./onDrop');
    const backlog = document.querySelector('#tasks-backlog');
    const progress = document.querySelector('#tasks-progress');
    const review = document.querySelector('#tasks-review');
    const complete = document.querySelector('#tasks-complete');
    const allLanes = [backlog, progress, review, complete];

    allLanes.forEach(l => {
        l.addEventListener('dragover', allowDrop);
        l.addEventListener('drop', function() {
            onDrop(event, l)
        });
    })
}

module.exports = laneSetup;
