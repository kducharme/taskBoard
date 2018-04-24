const filterTasks = () => {
    const printArea = document.querySelector('#filters');
    const search = createSearch();
    const labelDropdown = filterByLabel();

    printArea.appendChild(search)
    printArea.appendChild(labelDropdown)
}

const createSearch = () => {
    const input = document.createElement('input');
    input.classList.add('filters__search')
    input.setAttribute('placeholder', 'Search tasks')
    return input;
}

const filterByLabel = () => {
    const dropdown = document.createElement('select')
    const filters = ['Green', 'Red', 'Yellow', 'Blue', 'Orange']

    filters.forEach(filter => {
        const option = document.createElement('option')
        option.text = filter;
        option.value = filter;
        dropdown.add(option)
    })
    return dropdown
}



filterTasks();