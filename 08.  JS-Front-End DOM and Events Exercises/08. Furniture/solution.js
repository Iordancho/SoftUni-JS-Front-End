async function solve() {
  const generateButton = document.querySelector('#exercise button');
  const inputs = Array.from(document.querySelectorAll('input'));
  inputs.map(input => input.removeAttribute("disabled"));

  generateButton.addEventListener('click', generateItem);

  function generateItem() {
    const input = JSON.parse(document.querySelector('#exercise textarea').value);
    input.map(obj => {
      const productsList = document.querySelector('tbody');
      const row = document.createElement('tr');

      row.appendChild(imgCellCreator(obj.img));
      row.appendChild(cellCreator(obj.name));
      row.appendChild(cellCreator(obj.price));[p]
      row.appendChild(cellCreator(obj.decFactor));
      row.appendChild(checkBoxCellCreator());
      productsList.appendChild(row);
    })
  }

  
  function checkBoxCellCreator() {
    const checkBoxCell = document.createElement('td');
      const checkBox = document.createElement('input');
      checkBox.type = "checkbox";
      checkBoxCell.appendChild(checkBox);
      return checkBoxCell;
  }

  function imgCellCreator(object) {
    const imgCell = document.createElement('td');
      const img = document.createElement('img');
      img.src = object;
      imgCell.appendChild(img);
      return imgCell
  }

  function cellCreator(object) {
    const cell = document.createElement('td');
    const attr = document.createElement('p');
    attr.textContent = object;
    cell.appendChild(attr);
    return cell;
  }

  const buyButton = document.querySelector('#exercise button:nth-of-type(2)');
  
  buyButton.addEventListener('click', buyItems)
  
  function buyItems() {
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
    
    const checkedItems = checkboxes.map(checkbox => {
      const row = checkbox.parentElement.parentElement;

      const name = row.querySelector('td:nth-of-type(2)').innerText;
      const price = row.querySelector('td:nth-of-type(3)').innerText;
      const decFactor = row.querySelector('td:nth-of-type(4)').innerText;
      
      return {name, price, decFactor};
    })
    
    const boughtItems = checkedItems.reduce((acc, curr) => {
      acc.names.push(curr.name);
      acc.price += Number(curr.price);
      acc.AvrgDecFactor += Number(curr.decFactor) / checkedItems.length;

      return acc;
    }, { names: [], price: 0, AvrgDecFactor: 0})
     
    const result = 
    `Bought furniture: ${boughtItems.names.join(', ')}
Total price: ${boughtItems.price.toFixed(2)}
Average decoration factor: ${boughtItems.AvrgDecFactor}`;
     

     const output = document.querySelector('#exercise textarea:nth-of-type(2)');
     output.textContent = result;
  }
}