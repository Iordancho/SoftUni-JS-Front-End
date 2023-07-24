function extractText() {
    const items = document.querySelector('#items').textContent;
    let textArea = document.querySelector('#result');
    textArea.textContent = items;
}