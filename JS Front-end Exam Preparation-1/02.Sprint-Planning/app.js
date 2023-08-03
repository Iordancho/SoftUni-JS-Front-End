window.addEventListener('load', solve);

function solve() {
    const tasks = {};
    const hiddenInput = document.querySelector('#task-id')

    const inputSelectors = {
        title: document.querySelector('#title'),
        description: document.querySelector('#description'),
        label: document.querySelector('#label'),
        estimationPoints: document.querySelector('#points'),
        assignee: document.querySelector('#assignee'),
    };

    const createBtn = document.querySelector('#create-task-btn');
    const deleteBtn = document.querySelector('#delete-task-btn');

    createBtn.addEventListener('click', createTask);
    deleteBtn.addEventListener('click', deleteTask);

    function createTask() {
        
        if(Object.values(inputSelectors).some(input => input.value === "")) {
            return;
        }
        const labels = {
            Feature: 'feature',
            "Low Priority Bug": "low-priority",
            "High Priority Bug": "high-priority",
        };
        const labelIcons = {
            Feature: '&#8865;',
            "Low Priority Bug": "&#9737;",
            "High Priority Bug": "&#9888;",
        }

        const task = {
            id: `task-${Object.values(tasks).length + 1}`,
            title: inputSelectors.title.value,
            description: inputSelectors.description.value,
            label: inputSelectors.label.value,
            estimationPoints: Number(inputSelectors.estimationPoints.value),
            assignee: inputSelectors.assignee.value,
        };
        tasks[task.id] = task;

        const taskSection = document.querySelector('#tasks-section');
        const article = document.createElement('article');
        article.classList.add('task-card');

        const label = document.createElement('div');
        label.innerHTML = `${task.label} ${labelIcons[task.label]}`;
        label.classList.add('task-card-label');
        label.classList.add(labels[task.label]);

        const title = document.createElement('h3');
        title.textContent = task.title;
        title.classList.add('task-card-title');

        const description = document.createElement('p');
        description.textContent = task.description;
        description.classList.add('task-card-description');

        const points = document.createElement('div');
        points.textContent = `Estimated at ${task.estimationPoints} pts`;
        points.classList.add('task-card-points');

        const assignee = document.createElement('div');
        assignee.textContent = `Assigned to ${task.assignee}`;
        assignee.classList.add('task-card-assignee');

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('task-card-actions');
        const taskDeleteBtn = document.createElement('button');
        taskDeleteBtn.textContent = "Delete";
        btnContainer.appendChild(taskDeleteBtn);
        taskDeleteBtn.value = task.id;
        taskDeleteBtn.addEventListener('click', prepareTask);

        article.appendChild(label);
        article.appendChild(title);
        article.appendChild(description);
        article.appendChild(points);
        article.appendChild(assignee);
        article.appendChild(btnContainer);
        taskSection.appendChild(article);
        
        Object.values(inputSelectors).forEach(input => {
            input.value = "";
        })
        calculateTotalPoints();
    }

    function prepareTask(e) {
        const currTask = tasks[e.currentTarget.value];

        inputSelectors.title.value = currTask.title;
        inputSelectors.description.value = currTask.description;
        inputSelectors.label.value = currTask.label;
        inputSelectors.estimationPoints.value = currTask.estimationPoints;
        inputSelectors.assignee.value = currTask.assignee;

        createBtn.setAttribute('disabled', true);
        deleteBtn.removeAttribute('disabled');

        Object.values(inputSelectors).forEach(input => {
            input.setAttribute('disabled', true);
        })

        
        hiddenInput.value = e.currentTarget.value;
    }

    function deleteTask() {
        const taskToDeleteID = hiddenInput.value;
        const articles = Array.from(document.querySelectorAll('#tasks-section article button'));
        
        const taskToDelete = articles.find(a => a.value === taskToDeleteID);
        taskToDelete.parentElement.parentElement.remove();

        
        delete tasks[taskToDeleteID];

        Object.values(inputSelectors).forEach(input => {
            input.value = "";
            input.removeAttribute('disabled');
        })

        createBtn.removeAttribute('disabled');
        deleteBtn.setAttribute('disabled', true);

        calculateTotalPoints();
    }

    function calculateTotalPoints() {
        let points = Object.values(tasks).reduce(
            (acc, curr) => acc + curr.estimationPoints,
            0   
        );
        
        let totalPoints = document.querySelector('#total-sprint-points');
        totalPoints.textContent = `Total Points ${points}pts`
    }
}
    