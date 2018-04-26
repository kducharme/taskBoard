// const filterTasks = () => {
//     const printArea = document.querySelector('#filters');
//     // const search = createSearch();
//     const labelDropdown = filterByLabel();

//     printArea.appendChild(search)
//     printArea.appendChild(labelDropdown)
// }

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
    placeholder.textContent = "Filter by label"
    icon.innerHTML = `<i class="material-icons dark-icon">arrow_drop_down</i>`
    structure.appendChild(placeholder)
    structure.appendChild(icon)
    structure.classList.add('filters__dropdown--placeholder')

    return structure;
}

const createFilterStructure = () => {
    const dropdown = document.querySelector('#filterStructure');
    const filters = ['Green', 'Red', 'Yellow', 'Blue', 'Orange'];
    dropdown.classList.toggle('filters__dropdown--click');
    const dropdownOptions = document.createElement('div')

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

// filterTasks();

// const filterBySearch = (evt) => {
//     // const searchBox = document.querySelector('#searchTasks');
//     let matchArray = [];

//     const userEntry = evt.target.value //this get value of form

//     if (userEntry !== "") {
//         // Filter
//         allTasks.filter(t => {
//             const regex = new RegExp(userEntry, 'gi');

//         })
//         taskFactory()
//         // need to reset the dom
//     }
// }

// filterBySearch();
