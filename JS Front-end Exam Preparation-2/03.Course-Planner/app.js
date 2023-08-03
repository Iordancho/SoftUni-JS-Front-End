const API_URL = 'http://localhost:3030/jsonstore/tasks/';


let courses = {};
let currCourseID;
const inputFields = {
    title: document.querySelector('input[name = "course-name"]'),
    type: document.querySelector('input[name = "course-type"]'),
    description: document.querySelector('#description'),
    teacherName: document.querySelector('input[name = "teacher-name"]'),
};



const loadCoursesButton = document.querySelector('#load-course');
loadCoursesButton.addEventListener('click', loadCourses);
const addCourseButton = document.querySelector('#add-course');
addCourseButton.addEventListener('click', addCourse);
const editButtonForm = document.querySelector('#edit-course');
editButtonForm.addEventListener('click', submitEditCourse);




async function loadCourses() {
    courses = await (await fetch(API_URL)).json();
    
    const listItems = document.querySelector('#list');
    listItems.innerHTML = "";
    Object.values(courses).forEach(course => {
        const item = document.createElement('div');
        item.classList.add('container');

        const courseTitle = document.createElement('h2');
        courseTitle.textContent = course.title;

        const courseTeacherName = document.createElement('h3');
        courseTeacherName.textContent = course.teacher;

        const courseType = document.createElement('h3');
        courseType.textContent = course.type;

        const courseDescription = document.createElement('h4');
        courseDescription.textContent = course.description;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit Course';
        editButton.value = course._id;
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', prepareCourseForEdit)

        const finishButton = document.createElement('button');
        finishButton.textContent = 'Finish Course';
        finishButton.value = course._id;
        finishButton.classList.add('finish-btn');
        finishButton.addEventListener('click', deleteCourse);

        item.appendChild(courseTitle);
        item.appendChild(courseTeacherName);
        item.appendChild(courseType);
        item.appendChild(courseDescription);
        item.appendChild(editButton);
        item.appendChild(finishButton);

        listItems.appendChild(item);
    });
}

async function addCourse(e) {
    e.preventDefault();
    const course = {
        title: inputFields.title.value,
        type: inputFields.type.value,
        description: inputFields.description.value,
        teacher: inputFields.teacherName.value,
    };

    await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(course),
    })

    Object.values(inputFields).map(input => input.value = "");
    await loadCourses();
}

async function prepareCourseForEdit(e) {
    const container = e.currentTarget.parentElement;
    currCourseID = e.currentTarget.value;
    const title = container.querySelector('h2').textContent;
    const teacher = container.querySelector('h3').textContent;
    const type = container.querySelector('h3:nth-of-type(2)').textContent;
    const description = container.querySelector('h4').textContent;

    inputFields.title.value = title;
    inputFields.teacherName.value = teacher;
    inputFields.type.value = type;
    inputFields.description.value = description;

    container.remove();
    editButtonForm.removeAttribute('disabled');
    addCourseButton.setAttribute('disabled', true);
}

async function submitEditCourse(e) {
    e.preventDefault();
    
    const course = {
        title: inputFields.title.value,
        type: inputFields.type.value,
        description: inputFields.description.value,
        teacher: inputFields.teacherName.value,
        _id: currCourseID,
    };

    await fetch(`${API_URL}${currCourseID}`, {
        method: 'PUT',
        body: JSON.stringify(course),
    })

    Object.values(inputFields).map(input => input.value = "");
    await loadCourses();

    editButtonForm.setAttribute('disabled', true);
    addCourseButton.removeAttribute('disabled');
}

async function deleteCourse(e) {
    currCourseID = e.currentTarget.value;
    await fetch(`${API_URL}${currCourseID}`, {
        method: 'DELETE',
        body: undefined,
    })

    await loadCourses();
}