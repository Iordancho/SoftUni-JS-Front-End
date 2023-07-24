function addItem() {
    let li = document.createElement("li");
    input = document.querySelector('#newItemText').value;
    li.textContent = input;
    let items = document.querySelector('#items');
    let a = document.createElement("a");
    a.href = "#";
    a.textContent = "[Delete]";
    
    
    li.appendChild(a);
    items.appendChild(li);
    a.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    } )
}