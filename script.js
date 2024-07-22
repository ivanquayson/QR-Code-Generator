document.getElementById('generate-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    if (inputText) {
        generateQRCode(inputText);
    } else {
        alert('Please enter some text or URL');
    }
});

function generateQRCode(text) {
    const qrCodeDiv = document.getElementById('qr-code');
    qrCodeDiv.innerHTML = ''; // Clear any existing QR Code
    new QRCode(qrCodeDiv, {
        text: text,
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

