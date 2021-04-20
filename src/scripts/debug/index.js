const form = document.querySelector('.js-calculator-form');

/**
 * @type {boolean}
 */
let isDebugActive = false;

/**
 * Creates an output element with the data from the form.
 * @param {object} data An object based on the Formdata.
 * @returns {HTMLElement}
 */
const createOutput = data => {
    const div = document.createElement('div');
    const code = document.createElement('code');
    const pre = document.createElement('pre');
    const button = document.createElement('button');

    div.classList.add('debug');
    pre.textContent = JSON.stringify(data, null, 4);

    button.textContent = 'x';
    button.classList.add('debug__close', 'js-close-debug');

    code.append(pre);
    div.append(code);
    div.append(button);
    return div;
};

/**
 * Closes the debug window.
 * @returns {void}
 */
const closeDebug = () => {
    const existingOutput = document.querySelector('.debug');

    if (existingOutput) {
        existingOutput.remove();
    }
};

// Formdata event handler.
form.addEventListener('formdata', ({ formData }) => {
    const formObject = Object.fromEntries([...formData]);
    const output = createOutput(formObject);

    closeDebug();
    createOutput(formObject);

    document.body.append(output);
});

// Submit event handler.
form.addEventListener('submit', event => {
    new FormData(event.target);
    event.preventDefault();
});

// Global click handler.
document.addEventListener('click', event => {
    const closeButton = event.target.closest('.js-close-debug');

    if (closeButton) {
        closeDebug();
    }
});
