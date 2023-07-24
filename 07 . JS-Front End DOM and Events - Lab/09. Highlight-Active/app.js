function focused() {
    const items = Array.from(document.querySelectorAll('input'));

    
    items.forEach(item => {
        item.addEventListener('focus', (e) => {
            e.target.parentElement.className = 'focused';

        });
        item.addEventListener('blur', (e) => {
            e.target.parentElement.className = '';

        });
    })
}