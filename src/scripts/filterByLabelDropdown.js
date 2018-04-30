// Adds options for filtering by label on dropdown
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

module.exports = addLabelOptions;
