const buttonType = document.querySelectorAll('.list-type-value-qr button');
let typeButton = 'url';
const inputBox = document.getElementById('box-inp');
const taglineInfo = document.getElementById('sub-tagline-input');

const generateForm = () => {

    buttonType.forEach((btn) => {
        btn.addEventListener('click', () => {

            buttonType.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            typeButton = btn.textContent.trim().toLowerCase();

            if (typeButton === 'text') {
                inputTextForm();
            } else {
                inputUrlForm();
            }

        });
    });

}

const inputTextForm = () => {

    inputBox.innerHTML = '';

    const content = '';

    taglineInfo.textContent = 'Enter Your Text';
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Text ...';
    textarea.id = 'QrValue';

    inputBox.appendChild(textarea);

}

const inputUrlForm = () => {

    inputBox.innerHTML = '';

    const content = '';

    taglineInfo.textContent = 'Enter Your URL';
    const input = document.createElement('input');
    input.type = 'url';
    input.placeholder = 'URL ...';
    input.id = 'QrValue';

    inputBox.appendChild(input);

}

export { generateForm }