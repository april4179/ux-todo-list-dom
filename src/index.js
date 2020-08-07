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

function renderTodoApp() {
	let app = document.querySelector('#app');
	let h1 = document.createElement('h1');
	// your code here
	const app = document.querySelector('#app');
	const h1 = document.createElement('h1');
	const toDoListNode = document.createElement('form');

    h1.innerText = 'Todo List';
    for (let task of todos) {
        const isChecked = task.completed ? "checked" : null;
    
	let html = `<ul>
    <li class="list-item">
      <input type="checkbox"/>
      Take Jim to the hair salon
    </li>
    <li class="list-item">
      <input type="checkbox"/>
      Drop off wedding invitation at mailbox
    </li>
    etc...
  </ul>`;

	app.appendChild(h1);
    // and maybe some here
    toDoListNode.innerHTML += html;
}
app.appendChild(h1);
app.appendChild(toDoListNode);

renderTodoApp();
