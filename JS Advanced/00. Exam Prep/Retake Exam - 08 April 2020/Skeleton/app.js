function solve() {
    const sections = document.getElementsByTagName('section');
    const taskName = document.getElementById('task');
    const taskDescription = document.getElementById('description');
    const taskDate = document.getElementById('date');
    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();

        if (taskName.value != '' && taskDescription.value != '' && taskDate.value != '') {
            const newTask = createElement('article', '',
                createElement('h3', '', taskName.value),
                createElement('p', '', `Description: ${taskDescription.value}`),
                createElement('p', '', `Due Date: ${taskDate.value}`),
                createElement('div', 'flex',
                    createElement('button', 'green', 'Start'),
                    createElement('button', 'red', 'Delete')
                )
            );
            sections[1].querySelector('div:nth-child(2)').appendChild(newTask);
            const buttonsDiv = newTask.querySelector('div.flex');
            const buttons = buttonsDiv.getElementsByTagName('button');
            buttonsDiv.addEventListener('click', taskActions);

            taskName.value = '';
            taskDescription.value = '';
            taskDate.value = '';

            function taskActions(event) {
                if (event.target.textContent == 'Start') {
                    startTask();
                } else if (event.target.textContent == 'Delete') {
                    deleteTask();
                } else if (event.target.textContent == 'Finish') {
                    finishTask();
                }
            };

            function startTask() {
                sections[2].querySelector('div:nth-child(2)').appendChild(newTask);
                buttons[0].remove();
                buttonsDiv.appendChild(createElement('button', 'orange', 'Finish'));
            }
            function deleteTask() {
                newTask.remove();
            }
            function finishTask() {
                sections[3].querySelector('div:nth-child(2)').appendChild(newTask);
                buttonsDiv.remove();
            }
        }
    }
    function createElement(type, style, ...content) {
        const result = document.createElement(type);
        content.forEach(e => {
            if (typeof e == 'string') {
                const text = document.createTextNode(e);
                result.appendChild(text);
            } else {
                result.appendChild(e);
            }
        });
        if (style) { result.classList.add(style); };
        return result;
    }
}