window.addEventListener('load', () => {
    const form = document.querySelector(".task-form");
    const input = document.querySelector(".task-input");

    const listElement = document.querySelector(".tasks");

    // Load tasks from localStorage when the page loads
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for (const task of tasks) {
        addTask(task);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        tasks.push(task); // Add new task to the task array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Update localStorage
        addTask(task);
        input.value = '';
    })

    function addTask(task) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskContentElement = document.createElement('div');
        taskContentElement.classList.add('task-content');

        const contentElement = document.createElement('input');
        contentElement.classList.add('content');
        contentElement.type = 'text';
        contentElement.value = task;
        contentElement.setAttribute('readonly', 'readonly');

        const taskActionsElement = document.createElement('div');
        taskActionsElement.classList.add('task-actions');

        const editElement = document.createElement('button');
        editElement.classList.add('edit');
        editElement.innerText = 'EDIT';

        const deleteElement = document.createElement('button');
        deleteElement.classList.add('delete');
        deleteElement.innerText = 'DELETE';

        listElement.appendChild(taskElement);
        taskElement.appendChild(taskContentElement);
        taskContentElement.appendChild(contentElement);
        taskElement.appendChild(taskActionsElement);
        taskActionsElement.appendChild(editElement);
        taskActionsElement.appendChild(deleteElement);

        editElement.addEventListener('click', (e) => {
            if (editElement.innerText == "EDIT") {
                editElement.innerText = 'SAVE';
                contentElement.removeAttribute("readonly");
                contentElement.style = "color: rgb(219, 68, 186);";
                contentElement.focus();
            } else {
                editElement.innerText = "EDIT";
                contentElement.setAttribute("readonly", "readonly");
                contentElement.style = "color: black;";
                // Update the task in the tasks array
                const index = tasks.indexOf(task);
                tasks[index] = contentElement.value;
                // Update localStorage
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        })

        deleteElement.addEventListener('click', (e) => {
            listElement.removeChild(taskElement);
            // Remove the task from the tasks array
            const index = tasks.indexOf(task);
            if (index > -1) {
                tasks.splice(index, 1);
            }
            // Update localStorage
            localStorage.setItem('tasks', JSON.stringify(tasks));
        })

        if (!task) {
            //alert('YO BRO!!, write something?');
            //listElement.removeChild(taskElement);//
        }
    }
})
