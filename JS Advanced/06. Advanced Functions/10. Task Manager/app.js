function solve() {
    const addBtn = document.getElementById('add');
    const openSection = document.querySelector('section:nth-child(2)');
    const inProgress = document.getElementById('in-progress');
    const completeSection = document.querySelector('section:nth-child(4)');

    addBtn.addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();
        const inputs = Array.from(document.querySelectorAll('form input,textarea'));
        if (inputs.every(i => i.value != '')) {
            const newTask = createTask();
            openSection.querySelector('div:nth-child(2)').appendChild(newTask);

        };
        function createTask() {
            const taskItem = createElement('article',
                createElement('h3', inputs[0].value),
                createElement('p', `Description: ${inputs[1].value}`),
                createElement('p', `Due Date: ${inputs[2].value}`),
                createElement('div',
                    createElement('button', 'Start'),
                    createElement('button', 'Delete'))
            );
            const buttonField = taskItem.querySelector('div');
            buttonField.classList.add('flex');
            const taskButtons = taskItem.querySelectorAll('button');
            const addBtn = taskButtons[0];
            addBtn.classList.add('green');
            const deleteBtn = taskButtons[1];
            deleteBtn.classList.add('red');

            taskItem.querySelector('div.flex').addEventListener('click', buttonActions);
            
            function buttonActions(event) {
                if (event.target.textContent == 'Delete') {
                    taskItem.remove();
                }
                if (event.target.textContent == 'Start') {
                    inProgress.appendChild(taskItem);
                    addBtn.remove();
                    const finishBtn = createElement('button', 'Finish');
                    finishBtn.classList.add('orange');
                    buttonField.appendChild(finishBtn);
                }
                if (event.target.textContent == 'Finish') {
                    completeSection.querySelector('div:nth-child(2)').appendChild(taskItem);
                    buttonField.remove();
                }
            }
            return taskItem;
        }
    }
    function createElement(type, ...content) {
        const result = document.createElement(type);
        content.forEach(e => {
            if (typeof e == 'string') {
                let node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });
        return result;
    }
}