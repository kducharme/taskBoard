//Drag and drop functionality
const allowDrop = (event) => {
    const hoverLane = event.target.id;
    event.preventDefault();
}

module.exports = allowDrop;