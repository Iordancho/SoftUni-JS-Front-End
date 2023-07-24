async function attachEvents() {
  const response = await (await fetch('http://localhost:3030/jsonstore/collections/students')).json();

  const studentsList = document.querySelector('#results tbody');
  Object.values(response).forEach(student => {
    const row = document.createElement('tr');

    row.appendChild(createRow(student.firstName));
    row.appendChild(createRow(student.lastName));
    row.appendChild(createRow(student.facultyNumber));
    row.appendChild(createRow(student.grade));

    studentsList.appendChild(row);
  })
  
  document.querySelector('#submit').addEventListener('click', submitStudents);
}

function createRow(object) {
  const cell = document.createElement('td');
  cell.textContent = object;
  return cell;
}

async function submitStudents() {
  const firstName = document.querySelector('input[name="firstName"]').value;
  const lastName = document.querySelector('input[name="lastName"]').value;
  const facultyNumber = document.querySelector('input[name="facultyNumber"]').value;
  const grade = document.querySelector('input[name="grade"]').value;

  const student = {firstName, lastName, facultyNumber, grade};

  await fetch('http://localhost:3030/jsonstore/collections/students', {
    method: "POST",
    body: JSON.stringify(student)
  });

}

attachEvents();