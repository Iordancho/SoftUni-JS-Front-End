async function attachEvents() {
    document.querySelector('#refresh').addEventListener('click', loadMesseges);
    document.querySelector('#submit').addEventListener('click', postMessages);
}

async function postMessages() {
    const author = document.querySelector('input[name = "author"]');
    const content = document.querySelector('input[name = "content"]');

    
    const message = {
        author: author.value,
        content: content.value,
    }
    
    author.value = "";
    content.value = "";
    
    fetch('http://localhost:3030/jsonstore/messenger', {
        method: "POST",
        body: JSON.stringify(message)
    });
}

async function loadMesseges() {
    const response = await (await fetch('http://localhost:3030/jsonstore/messenger')).json();

    const textArea = document.querySelector('#messages');
    textArea.textContent = "";
    
    Object.values(response).forEach((message) => {
        textArea.textContent += `${message.author}: ${message.content}\n`;
    })
}

attachEvents();