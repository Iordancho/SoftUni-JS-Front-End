const addProductBtn = document.querySelector('#add-product');
const updateProductBtn = document.querySelector('#update-product');

function attachEvents() {
    document.querySelector('#load-product').addEventListener('click', loadProducts);
    addProductBtn.addEventListener('click', addProduct);
    updateProductBtn.addEventListener('click', updateProduct);
}

const API_URL = 'http://localhost:3030/jsonstore/grocery/';

let products = {};
let currentId;

const inputFields = {
    name: document.querySelector('#product'),
    count: document.querySelector('#count'),
    price: document.querySelector('#price'),
};

async function loadProducts(e) {
    if(e){
        e.preventDefault();
    }

    const listItems = document.querySelector('#tbody');
    listItems.innerHTML = "";

    products = await (await fetch(API_URL)).json();
    Object.values(products).forEach(product => {
        const item = document.createElement('tr');

        const name = document.createElement('td');
        name.classList.add('name');
        name.textContent = product.product;

        const count = document.createElement('td');
        count.classList.add('count-product');
        count.textContent = product.count;

        const price = document.createElement('td');
        price.classList.add('product-price');
        price.textContent = product.price;

        const buttons = document.createElement('td');
        buttons.classList.add('btn');

        const updateButton = document.createElement('button');
        updateButton.classList.add('update');
        updateButton.textContent = 'Update';
        updateButton.addEventListener('click', prepareProductUpdate);
        updateButton.value = product._id;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteProduct);
        deleteButton.value = product._id;

        buttons.appendChild(updateButton);
        buttons.appendChild(deleteButton);

        item.appendChild(name);
        item.appendChild(count);
        item.appendChild(price);
        item.appendChild(buttons);

        listItems.appendChild(item);

    })
}

async function addProduct(e) {
    e.preventDefault();

    const product = {
        product: inputFields.name.value,
        count: inputFields.count.value,
        price: inputFields.price.value,
    };

    await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(product),
    })

    Object.values(inputFields).map(input => input.value = "");

    await loadProducts();
}

function prepareProductUpdate(e) {
    const product = e.currentTarget.parentElement.parentElement;
    currentId = e.currentTarget.value;
    const name = product.querySelector('td').textContent;
    const count = product.querySelector('td:nth-of-type(2)').textContent;
    const price = product.querySelector('td:nth-of-type(3)').textContent;

    inputFields.name.value = name;
    inputFields.count.value = count;
    inputFields.price.value = price;

    addProductBtn.setAttribute('disabled', true);
    updateProductBtn.removeAttribute('disabled');
}

async function updateProduct() {
    const product = {
        product: inputFields.name.value,
        count: inputFields.count.value,
        price: inputFields.price.value,
    };

    await fetch(`${API_URL}${currentId}`, {
        method: 'PATCH',
        body: JSON.stringify(product),
    })

    Object.values(inputFields).map(input => input.value = "");

    await loadProducts();
}

async function deleteProduct(e) {
    await fetch(`${API_URL}${e.currentTarget.value}`, {
        method: 'DELETE',
    })

    await loadProducts();
}

attachEvents();