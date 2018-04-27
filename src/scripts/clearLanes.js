const clearLanes = () => {
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

module.exports = clearLanes;