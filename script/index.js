import { generateForm } from "./generate-form.js";
import { generateQR, downloadQR } from "./generate-qr.js";

const btnGenerateQR = document.getElementById('generate-qr-code');

document.addEventListener('DOMContentLoaded', () => {

    generateForm();
    downloadQR();

    btnGenerateQR.addEventListener('click', () => {
        generateQR();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            generateQR();
        }
    });

});