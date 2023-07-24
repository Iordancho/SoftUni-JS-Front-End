function toggle() {
    const button = document.querySelector('.button');
    const extra = document.querySelector('#extra');
    
    if(button.textContent === "More") {
        extra.style.display = "block";
        button.textContent = "Less"
    } else {
        extra.style.display = "none";
        button.textContent = "More"
    }
}