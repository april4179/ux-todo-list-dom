let todos = [
	{
		completed: false,
		description: 'Take Jim to the hair salon',
	},
	{
		completed: true,
		description: 'Drop off wedding invitation at mailbox',
	},
	{
		completed: false,
		description: 'Pick up the cake',
	},
	{
		completed: false,
		description: 'Call the caterers',
	},
];

// function renderTodoApp() {
let app = document.querySelector('#app');
let h1 = document.createElement('h1');
// your code here
let toDoList = document.querySelector('#todo-list');
// const app = document.querySelector('#app');
// const h1 = document.createElement('h1');
const toDoListNode = document.createElement('form');

function renderTodoApp() {
	h1.innerText = 'Todo List';
	for (let todoItem of todos) {
		const isChecked = todoItem.completed ? 'checked' : null;

		let html = `<ul>
    <li class="list-item">
	  <input type="checkbox" ${isChecked}/>
	  ${todoItem.description}
    </li>
  </ul>`;

		app.appendChild(h1);
		toDoListNode.innerHTML += html;

		app.appendChild(h1);
		app.appendChild(toDoListNode);
	}
	let checkboxes = document.querySelectorAll('.list-item');
	for (let checkbox of checkboxes) {
		checkbox.addEventListener('change', () => {});
	}
}
renderTodoApp();
