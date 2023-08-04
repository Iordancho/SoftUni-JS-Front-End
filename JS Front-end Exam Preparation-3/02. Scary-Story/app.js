window.addEventListener("load", solve);

function solve() {

  const inputFields = {
    firstName: document.querySelector('#first-name'),
    lastName: document.querySelector('#last-name'),
    age: document.querySelector('#age'),
    title: document.querySelector('#story-title'),
    genre: document.querySelector('#genre'),
    story: document.querySelector('#story'),
  };

  const publishButton = document.querySelector('#form-btn');
  publishButton.addEventListener('click', publishStory);

  const listItems = document.querySelector('#preview-list');

  function publishStory() {
    if(Object.values(inputFields).some(input => input.value === "")){
      return;
    }

    const listItem = document.createElement('li');
    const article = document.createElement('article');

    const fullName = [];
    fullName.push(inputFields.firstName.value);
    fullName.push(inputFields.lastName.value);

    const name = document.createElement('h4');
    name.textContent = `Name: ${inputFields.firstName.value} ${inputFields.lastName.value}`;
    name.value = fullName;

    const age = document.createElement('p');
    age.textContent = `Age: ${inputFields.age.value}`;
    age.value = inputFields.age.value;

    const title = document.createElement('p');
    title.textContent = `Title: ${inputFields.title.value}`;
    title.value = inputFields.title.value;

    const genre = document.createElement('p');
    genre.textContent = `Genre: ${inputFields.genre.value}`;
    genre.value = inputFields.genre.value;

    const story = document.createElement('p');
    story.textContent = inputFields.story.value;

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save Story';
    saveButton.classList.add('save-btn');
    saveButton.addEventListener('click', saveStory);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit Story';
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', editStory);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete Story";
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', deleteStory);

    article.appendChild(name);
    article.appendChild(age);
    article.appendChild(title);
    article.appendChild(genre);
    article.appendChild(story);
    listItem.appendChild(article);
    listItem.appendChild(saveButton);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    listItems.appendChild(listItem);

    Object.values(inputFields).map(input=> input.value = '');
    publishButton.setAttribute('disabled', true);
  }

  function editStory(e) {
    const currStory = e.currentTarget.parentElement;

    const fullName = currStory.querySelector('h4').value;
    const age = currStory.querySelector('p').value;
    const title = currStory.querySelector('p:nth-of-type(2)').value;
    const genre = currStory.querySelector('p:nth-of-type(3)').value;
    const story = currStory.querySelector('p:nth-of-type(4)').textContent;

    
    inputFields.firstName.value = fullName[0];
    inputFields.lastName.value = fullName[1];
    inputFields.age.value = age;
    inputFields.title.value = title;
    inputFields.genre.value = genre;
    inputFields.story.value = story;

    currStory.remove();
    publishButton.removeAttribute('disabled');
  }


  function saveStory(e) {
    const main = document.querySelector('#main');
    const formWrapper = document.querySelector('div[class = "form-wrapper"]');
    const sideWrapper = document.querySelector('#side-wrapper');
    formWrapper.remove();
    sideWrapper.remove();

    const h1 = document.createElement('h1');
    h1.textContent = 'Your scary story is saved!';
    main.appendChild(h1);
  }

  function deleteStory(e) {
    const currStory = e.currentTarget.parentElement;
    currStory.remove();
    publishButton.removeAttribute('disabled');
  }
}
