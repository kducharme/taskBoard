const buttonFactory = (classList, buttonText, eventListener, hide) => {
    const button = document.createElement('button');
    button.addEventListener('click',eventListener)
    button.textContent = buttonText;
    button.classList.add(classList);
    button.classList.add(hide);
    return button;
};

module.exports = buttonFactory;