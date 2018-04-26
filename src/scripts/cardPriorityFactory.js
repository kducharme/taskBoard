const cardPriority = (priority) => {
    document.createElement('span');
    priorityStyle.classList.add('card-priority')
    switch (priority) {
        case 'red':
            priorityStyle.classList.add('red')
            return priorityStyle;
            break;
        case 'orange':
            priorityStyle.classList.add('orange')
            return priorityStyle;
            break;
        case 'green':
            priorityStyle.classList.add('green')
            return priorityStyle;
            break;
        case 'blue':
            priorityStyle.classList.add('blue')
            return priorityStyle;
            break;
        case 'yellow':
            priorityStyle.classList.add('yellow')
            return priorityStyle;
            break;
    }
}

module.exports = cardPriority;