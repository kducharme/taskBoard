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
    const dropdown = document.createElement('span');
    const placeholder = filterPlaceholder();
    dropdown.addEventListener('click', addLabelOptions)
    dropdown.setAttribute('id', 'filterStructure')
    dropdown.classList.add('filters__dropdown')
    dropdown.appendChild(placeholder)
    
    return dropdown
}

const filterPlaceholder = () => {
    const structure = document.createElement('span');
    const placeholder = document.createElement('p');
    const icon = document.createElement('p');
    placeholder.textContent = "Select label"
    icon.innerHTML = `<i class="material-icons dark-icon">arrow_drop_down</i>`
    structure.appendChild(placeholder)
    structure.appendChild(icon)
    structure.classList.add('filters__dropdown--placeholder')

    return structure;
}

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



filterTasks();