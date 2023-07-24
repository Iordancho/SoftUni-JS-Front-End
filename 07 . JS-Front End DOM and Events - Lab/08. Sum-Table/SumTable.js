function sumTable() {
    const items = Array.from(document.querySelectorAll('td:nth-child(2)'));
    items.pop();
    const result = items.reduce((acc, curr) => {
        return acc += Number(curr.textContent);
    }, 0)
    const sum = document.querySelector('#sum');
    sum.textContent = result;
}