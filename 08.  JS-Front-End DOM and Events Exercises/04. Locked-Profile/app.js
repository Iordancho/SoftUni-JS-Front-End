function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('.profile button'));
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const lockedRadioButton = e.currentTarget.parentElement.querySelector('input[type ="radio"]');
            
            if(lockedRadioButton.checked) {
                return;
            }

            const hiddenInfo = e.currentTarget.parentElement.querySelector('div');
            
            if(e.currentTarget.textContent === "Show more") {
                hiddenInfo.style.display = "block";
                e.currentTarget.textContent = "Hide it";
            } else {
                hiddenInfo.style.display = "none";
                e.currentTarget.textContent = "Show more";
            }
        })
    })

}