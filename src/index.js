import './styles.css';


const content = document.getElementById('content');
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const main = document.getElementById('main');
const footer = document.getElementById('footer');



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('create-todo-form').onsubmit = e => {
        e.preventDefault();
        const [title, dueDate, priority] = [
            e.target[0].value,
            e.target[1].value,
            e.target[2].value
        ];
        if (title && dueDate && priority) {
            const taskList = document.querySelector('.task-list');
            const taskDiv = document.createElement('div');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.style.marginRight = '0.5rem';
            const span = document.createElement('span');
            span.textContent = `${title} - ${dueDate} - ${priority}`;
            checkbox.onchange = () => {
                span.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
            };
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.style.marginLeft = '1rem';
            deleteBtn.onclick = () => {
                taskDiv.remove();
            };
            taskDiv.appendChild(checkbox);
            taskDiv.appendChild(span);
            taskDiv.appendChild(deleteBtn);
            taskList.appendChild(taskDiv);
            e.target.reset();
        }
    };
});

