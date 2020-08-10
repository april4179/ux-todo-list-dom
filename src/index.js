// let todos = [
// {
// completed: false,
// description: "Take Jim to the hair salon"
// },
// {
// completed: true,
// description: "Drop off wedding invitation at mailbox"
// },
// {
// completed: false,
// description: "Pick up the cake"
// },
// {
// completed: false,
// description: "Call the caterers"
// }
// ];

function renderTodoApp() {
	const app = document.querySelector('#app');
	// const h1 = document.createElement('h1');
	// const toDoListNode = document.createElement('form');
	// h1.innerText = 'Todo List';
	const toDoListNode = document.querySelector('.todo-list');
	toDoListNode.innerHTML = '';
	for (let task of todo) {
		// const isChecked = task.completed ? 'checked' : null;
		const isChecked = task.completed ? 'checked' : '';
		let html = `
        <li class="list-item">
        <input type=checkbox ${isChecked}>
        <label>${task.description}</label>
        </li>`;
		toDoListNode.innerHTML += html;
	}
	app.appendChild(toDoListNode);
}

renderTodoApp();

const submitButton = document.querySelector('#submitBtn');
const textOutputE1 = document.querySelector('#textOutput');
const todoListItemInput = document.querySelector('todoListItemName');

submitButton.onclick = (event) => {
	event.preventDefault();
	const todoListItemName = todoListItemInput.value;

	for (let i = 0; i < todos.length; i++) {
		let checkbox = toDoListNode[i];
		if (checkbox.checked) {
			todoListItemInput.push(checkbox);
		}
	}

	textOutputE1.innerHTML = todoListItemName;
};

//selectors
const todoListInput = document.querySelector('.todo-list-input');
const submitBtn = document.querySelector('.submit-btn');
const todoList = document.querySelector('.todo-list');

//Event Listeners
submitBtn.addEventListener('click', addTodo);

function addTodo(event) {
	event.preventDefault();
	let newTodo = {
		description: todoListInput.value,
		completed: false,
	};
	todo.unshift(newTodo);

	renderTodoApp();
}

let checkboxes = document.querySelectorAll('.list-item');
for (let checkbox of checkboxes) {
	checkbox.addEventListener('change', () => {});
}
