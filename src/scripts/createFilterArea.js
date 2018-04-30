// Creates the filters area with search and label dropdown
const createFilterArea = () => {
    const printArea = document.querySelector('#filters');
    const search = createSearch();
    const labelDropdown = filterByLabel();
    printArea.appendChild(search)
    printArea.appendChild(labelDropdown)
}

module.exports = createFilterArea;

// Creates structure for label dropdown filter
const filterByLabel = () => {
    const addLabelOptions = require('./filterByLabelDropdown');
    const dropdown = document.createElement('span');
    const placeholder = filterPlaceholder();
    dropdown.addEventListener('click', addLabelOptions)
    dropdown.setAttribute('id', 'filterStructure')
    dropdown.classList.add('filters__dropdown')
    dropdown.appendChild(placeholder)
    
    return dropdown
}

// Custom dropdown for filtering label
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

// Creates structure for search area
const createSearch = () => {
    const filterBySearch = require('./filterBySearch');
    const input = document.createElement('input');
    input.classList.add('filters__search')
    input.setAttribute('placeholder', 'Search tasks')
    input.setAttribute('id', 'searchTasks')
    input.addEventListener('keyup', filterBySearch)

    return input;
}