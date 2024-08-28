document.getElementById('encryptButton').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;
    document.getElementById('resultText').style.display = 'none';
    document.getElementById('infoText').style.display = 'none';
    document.getElementById('resultImage').style.display = 'none';
});

document.getElementById('decryptButton').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;
    document.getElementById('resultText').style.display = 'none';
    document.getElementById('infoText').style.display = 'none';
    document.getElementById('resultImage').style.display = 'none';
});

document.getElementById('copyButton').addEventListener('click', function() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
