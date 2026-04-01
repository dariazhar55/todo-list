function addTask() {
    const input = document.getElementById('newTaskInput');
    if (input.value.trim()) {
        const taskList = document.getElementById('taskList');
        const newItem = document.createElement('li');

        // Создаем span для текста задачи
        const taskText = document.createElement('span');
        taskText.textContent = input.value;
        newItem.appendChild(taskText);

        // Создаем кнопку удаления
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✖';
        deleteBtn.onclick = function() {
            taskList.removeChild(newItem);
        };
        newItem.appendChild(deleteBtn);

        taskList.appendChild(newItem);
        input.value = '';
    }
}