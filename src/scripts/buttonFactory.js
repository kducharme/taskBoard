const buttonFactory = (classList, buttonText, eventListener, hide) => {
    const button = document.createElement('button');
    // button.setAttribute('id', `button__${buttonID.next().value}`);
    button.addEventListener('click', eventListener)
    button.classList.add(classList);
    button.textContent = buttonText;
    button.classList.add(hide);

    return button;
};

module.exports = buttonFactory;