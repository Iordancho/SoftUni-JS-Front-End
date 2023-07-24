function create(words) {
   const result = document.querySelector('#content');
   words.forEach(word => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      div.appendChild(p);
      result.appendChild(div);
      p.style.display = 'none';
      
      div.addEventListener('click', () => {
         p.style.display = "block";
      })
      
      
   });
}