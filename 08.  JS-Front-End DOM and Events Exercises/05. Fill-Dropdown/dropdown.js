function addItem() {
    const itemText = document.querySelector('#newItemText');
    const itemValue = document.querySelector('#newItemValue');
    const option = document.createElement('option');
    option.textContent = itemText.value;
    option.value = itemValue.value;
    const menu = document.querySelector('#menu');
    menu.appendChild(option);
    itemText.value = "";
    itemValue.value = "";
}