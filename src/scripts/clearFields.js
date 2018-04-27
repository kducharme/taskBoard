// Clears fields after the create task button is clicked
const clearFields = () => {
    const name = document.querySelector('#taskName');
    const details = document.querySelector('#taskDetails');

    name.value = "";
    details.value = "";
}

exports.module = clearFields;