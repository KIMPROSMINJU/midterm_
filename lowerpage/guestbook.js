//배열을 사용하여 방명록을 저장
const guestbook = [];

//방명록을 작성하는 기능
const form = document.getElementById('guestbook-form');
const list = document.getElementById('guestbook-list');

form.addEventListener('submit', event => {
	event.preventDefault();

	const name = event.target.elements.name.value;
	const message = event.target.elements.message.value;

	guestbook.push({ name, message });

	renderList();
});

//저장된 방명록을 보여주는 기능
function renderList() {
	list.innerHTML = '';

	guestbook.forEach(entry => {
		const item = document.createElement('div');

		const name = document.createElement('h3');
		name.textContent = entry.name;
		item.appendChild(name);

		const message = document.createElement('p');
		message.textContent = entry.message;
		item.appendChild(message);

		list.appendChild(item);
	});
}
