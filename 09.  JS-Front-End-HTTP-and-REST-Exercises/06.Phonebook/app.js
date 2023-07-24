function attachEvents() {
    document.querySelector('#btnLoad').addEventListener('click', loadContacts);
    document.querySelector('#btnCreate').addEventListener('click', createContact);
}
async function deleteContact(e) {
    const contactID = e.currentTarget.value;
    await fetch(`http://localhost:3030/jsonstore/phonebook/${contactID}`, {
        method: "DELETE"
    });
    
    loadContacts();
}

async function createContact() {
    const person = document.querySelector('#person');
    const phone = document.querySelector('#phone');

    const contact = {
        person: person.value,
        phone: phone.value,
    };

    person.value = "";
    phone.value = "";

    fetch('http://localhost:3030/jsonstore/phonebook', {
        method: "POST",
        body: JSON.stringify(contact)
    });

    loadContacts();
}

async function loadContacts() {
    const response = await (await fetch('http://localhost:3030/jsonstore/phonebook')).json();

    const listItems = document.querySelector('#phonebook');
    listItems.textContent = "";

    Object.values(response).forEach(contact => {
        const item = document.createElement('li');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.value = contact._id;
        deleteBtn.addEventListener('click', deleteContact);

        item.textContent = `${contact.person}: ${contact.phone}`;
        item.appendChild(deleteBtn);

        listItems.appendChild(item);
    })
}

attachEvents();