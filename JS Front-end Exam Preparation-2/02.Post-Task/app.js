window.addEventListener("load", solve);

function solve() {
    const publishButton = document.querySelector('#publish-btn');
    publishButton.addEventListener('click', publishTask);
  
    const inputFields = {
      title: document.querySelector('#task-title'),
      category: document.querySelector('#task-category'),
      content: document.querySelector('#task-content'),
    };
  
    function publishTask() {
      if(Object.values(inputFields).some(input => input.value === "")) {
          return;
      }
      const reviewList = document.querySelector('#review-list');
      const listItem = document.createElement('li');
      listItem.classList.add('rpost');
      const article = document.createElement('article');
  
      const taskTitle = document.createElement('h4');
      taskTitle.textContent = inputFields.title.value;
  
      const taskCategory = document.createElement('p');
      taskCategory.textContent = `Category: ${inputFields.category.value}`;
      taskCategory.value = inputFields.category.value;
  
      const taskContent = document.createElement('p');
      taskContent.textContent = `Content: ${inputFields.content.value}`;
      taskContent.value = inputFields.content.value;
  
      const editButton = document.createElement('button');
      editButton.classList.add('action-btn');
      editButton.classList.add('edit');
      editButton.textContent = "Edit";
      editButton.addEventListener('click', editTask)
  
      const postButton = document.createElement('button');
      postButton.classList.add('action-btn');
      postButton.classList.add('post');
      postButton.textContent = "Post";
      postButton.addEventListener('click', postTask);
  
      article.appendChild(taskTitle);
      article.appendChild(taskCategory);
      article.appendChild(taskContent);
      listItem.appendChild(article);
      listItem.appendChild(editButton);
      listItem.appendChild(postButton);
      reviewList.appendChild(listItem);
  
      Object.values(inputFields).forEach(input => {
          input.value = "";
      });
    }
  
    function editTask(e) {
      const task = e.currentTarget.parentElement;
      const taskTitle = task.querySelector('h4').textContent;
      const taskCategory = task.querySelector('p').value;
      const taskContent = task.querySelector('p:nth-of-type(2)').value;
      
      inputFields.title.value = taskTitle;
      inputFields.category.value = taskCategory;
      inputFields.content.value = taskContent;
  
      task.remove();
    }
  
    function postTask(e) {
      const task = e.currentTarget.parentElement;
  
      task.remove();
      const buttons = Array.from(task.querySelectorAll('button'));
      buttons.map(btn => btn.remove());
  
      const publishedList = document.querySelector('#published-list');
      publishedList.appendChild(task);
    }
  }