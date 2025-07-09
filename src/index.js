import './styles.css';


const content = document.getElementById('content');
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const main = document.getElementById('main');
const footer = document.getElementById('footer');


function getTodos() {
    return JSON.parse(localStorage.getItem('todos') || '[]');
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    const taskList = document.querySelector('.task-list');
    taskList.innerHTML = '';
    const todos = getTodos();
    todos.forEach((todo, idx) => {
        const taskDiv = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.style.marginRight = '0.5rem';
        const span = document.createElement('span');
        span.textContent = `${todo.title} - ${todo.dueDate} - ${todo.priority}`;
        span.style.textDecoration = todo.completed ? 'line-through' : 'none';
        checkbox.onchange = () => {
            todos[idx].completed = checkbox.checked;
            saveTodos(todos);
            renderTodos();
        };
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.marginLeft = '1rem';
        deleteBtn.onclick = () => {
            todos.splice(idx, 1);
            saveTodos(todos);
            renderTodos();
        };
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(span);
        taskDiv.appendChild(deleteBtn);
        taskList.appendChild(taskDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderTodos();
    document.getElementById('create-todo-form').onsubmit = e => {
        e.preventDefault();
        const [title, dueDate, priority] = [
            e.target[0].value,
            e.target[1].value,
            e.target[2].value
        ];
        if (title && dueDate && priority) {
            const todos = getTodos();
            todos.push({ title, dueDate, priority, completed: false });
            saveTodos(todos);
            renderTodos();
            e.target.reset();
        }
    };
});

