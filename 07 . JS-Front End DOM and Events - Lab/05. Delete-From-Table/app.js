function deleteByEmail() {
    const email = document.querySelector('input[name = "email"]').value;
    const items = Array.from(document.querySelectorAll("td:nth-child(even)"));

    const user = items.find((x) => x.textContent === email);

    const result = document.querySelector('#result');

    if(user) {
        user.parentElement.remove();
        result.textContent = "Deleted";
    } else {
        result.textContent = "Not found.";
    }
}