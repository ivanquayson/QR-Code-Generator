document.getElementById('generate.btn').addEventListener('click', function(){
    const inputText = document.getElementById('input-text').value;
    if (inputText) {
        generateQRCode(inputText);
    } else {
        alert('Please enter a text or a URL');
    }
});