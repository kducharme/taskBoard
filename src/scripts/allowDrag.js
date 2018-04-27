const allowDrag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
}

module.exports = allowDrag;