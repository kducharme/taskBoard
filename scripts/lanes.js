// Hides the task description when a user moves it into the completed lane
const completedTask = (card) => {
    const description = card.childNodes[1];
    description.classList.add('hide')
}