// TODO:
function attachEvents() {
    document.querySelector('#load-board-btn').addEventListener('click', loadTasks);
    document.querySelector('#create-task-btn').addEventListener('click', createTask);
}

const API_URL = 'http://localhost:3030/jsonstore/tasks/';
let tasks = {};

const statusTypes = {
    ToDo: 'todo-section',
    'In Progress': 'in-progress-section',
    'Code Review': 'code-review-section',
    Done: 'done-section',
};

const buttonTypes = {
    ToDo: 'Move to In Progress',
    'In Progress': 'Move to Code Review',
    'Code Review': 'Move to Done',
    Done: 'Close',
};

const toNextStatus = {
    ToDo: 'In Progress',
    'In Progress': 'Code Review',
    'Code Review': 'Done',
    Done: 'Close',
};


const inputSelectors = {
    taskTitle: document.querySelector('#title'),
    taskDescription: document.querySelector('#description'),
};

async function loadTasks() {
    tasks = await (await fetch(API_URL)).json();
    const section = Array.from(document.querySelectorAll('#board-section ul'));
    section.map(section => section.innerHTML = "");

    Object.values(tasks).forEach(task => {
        const taskTitle = task.title;
        const taskDescription = task.description;
        const taskStatus = task.status;
        const taskId = task._id;
        const taskList = document.querySelector(`#${statusTypes[taskStatus]} ul`);

        const li = document.createElement('li');
        li.classList.add('task');

        const title = document.createElement('h3');
        title.textContent = taskTitle;

        const description = document.createElement('p');
        description.textContent = taskDescription;

        const taskButton = document.createElement('button');
        taskButton.textContent = buttonTypes[taskStatus];
        taskButton.value = taskId;
        taskButton.addEventListener('click', moveTask);
        
        

        li.appendChild(title);
        li.appendChild(description);
        li.appendChild(taskButton);

        taskList.appendChild(li);
    })

}

async function createTask() {
    const task = {
        title: inputSelectors.taskTitle.value,
        description: inputSelectors.taskDescription.value,
        status: 'ToDo',
    };

    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(task)
    });

    Object.values(inputSelectors).forEach(input => {
        input.value = "";
    })

    await loadTasks();
}

 async function moveTask(e) {
    const taskToMove = tasks[e.currentTarget.value];
    let method = 'PATCH';
    let body = JSON.stringify({
        ...taskToMove,
        status: toNextStatus[taskToMove.status],
    });

    if(taskToMove.status === 'Done') {
        method = 'DELETE';
    }


    await fetch(`${API_URL}${taskToMove._id}`, {
        method,
        body,
    })

    await loadTasks();
    
}



attachEvents();