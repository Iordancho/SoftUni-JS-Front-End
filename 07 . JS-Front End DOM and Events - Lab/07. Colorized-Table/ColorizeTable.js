function colorize() {
    const items = Array.from(document.querySelectorAll('tr:nth-child(even)'));
    
    items.map(item => item.style.background = 'teal');
}