function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const cells = Array.from(document.querySelectorAll('tbody td'));
      const searchField = document.querySelector('#searchField');
      cells.map(cell => cell.parentElement.classList.remove('select'));
      cells.forEach(cell => {
         if(cell.textContent.includes(searchField.value) && searchField.value !== "") {
            cell.parentElement.classList.add('select')
         }
      })
      searchField.value = "";
   }
}