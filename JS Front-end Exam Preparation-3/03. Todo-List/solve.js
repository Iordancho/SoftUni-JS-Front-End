const API_URL = 'http://localhost:3030/jsonstore/tasks/';
let items = {};

const loadButton = document.querySelector('#load-button');
const addButton = document.querySelector('#add-button');

function attachEvents() {
    loadButton.addEventListener('click', (loadItems));
    addButton.addEventListener('click', additem);
}

async function loadItems(e) {
    if(e){
        e.preventDefault();
    }
    items = await (await fetch(API_URL)).json();

    const listItems = document.querySelector('#todo-list');
    listItems.innerHTML = "";
    
    Object.values(items).forEach(item => {
       const listItem = document.createElement('li');
       
       const name = document.createElement('span');
       name.textContent = item.name;

       const removeButton = document.createElement('button');
       removeButton.textContent = 'Remove';
       removeButton.addEventListener('click', removeItem);
       removeButton.value = item._id;

       const editButton = document.createElement('button');
       editButton.textContent = 'Edit';
       editButton.value = item._id;
       editButton.addEventListener('click', editItem);

       listItem.appendChild(name);
       listItem.appendChild(removeButton);
       listItem.appendChild(editButton);
       listItems.appendChild(listItem);
    })
    
}

async function editItem(e) {
    const item = e.currentTarget.parentElement;
    const span = item.querySelector('span');
    const name = span.textContent;
    

    const input = document.createElement('input');
    input.value = name;
    span.textContent = "";
    span.appendChild(input);

    const submitButton = document.createElement('button');
    submitButton.textContent = "Submit";
    submitButton.value = e.currentTarget.value;
    submitButton.addEventListener('click', submitItem);

    e.currentTarget.remove();
    item.appendChild(submitButton);
}

async function submitItem(e) {

    const item = e.currentTarget.parentElement;
    const name = item.querySelector('input').value;
    const id = e.currentTarget.value;
    
    task = items[id];

    const currItem = {
        name: name,
    }

    await fetch(`${API_URL}${id}`, {
        method: "PATCH",
        body: JSON.stringify({name: name}),
    })
    await loadItems(e);
    
}

async function additem(e) {
    e.preventDefault();
    const inputName = document.querySelector('#title').value;

    await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({name: inputName}),
    })
    await loadItems();
}

async function removeItem(e) {
    await fetch(`${API_URL}${e.currentTarget.value}`,{
        method: 'DELETE',
    })
    await loadItems();
}

attachEvents();
