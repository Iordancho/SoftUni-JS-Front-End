function addItem() {
    let li = document.createElement("li");
    input = document.querySelector('#newItemText');
    li.textContent = input.value;
    let items = document.querySelector('#items');
    items.appendChild(li);
    input.value = "";
}