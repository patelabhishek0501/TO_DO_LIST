function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');

    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${taskText}</span> <button onclick="completeTask(this)">Complete</button>`;

    taskList.appendChild(listItem);
    taskInput.value = '';
}

function completeTask(button) {
    const taskListItem = button.parentElement;
    const taskText = taskListItem.querySelector('span').innerText;
    const completedTaskList = document.getElementById('completedTaskList');

    const completedListItem = document.createElement('li');
    completedListItem.classList.add('completed');
    completedListItem.innerHTML = `<span>${taskText}</span> <span class="date">${new Date().toLocaleString()}</span>`;

    completedTaskList.appendChild(completedListItem);
    taskListItem.remove();
}
