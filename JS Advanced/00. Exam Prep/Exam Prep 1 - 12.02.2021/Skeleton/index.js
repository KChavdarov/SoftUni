function solve() {
    const lectureName = document.querySelector('.form-control input[name="lecture-name"]');
    const dateInput = document.querySelector('.form-control input[name="lecture-date"]');
    const moduleName = document.querySelector('.form-control select[name="lecture-module"]');
    const addBtn = document.querySelector('.form-control button');
    const courses = document.querySelector('section.user-view div.modules');

    addBtn.addEventListener('click', addLecture);
    courses.addEventListener('click', del);

    function addLecture(event) {
        event.preventDefault();

        if (lectureName.value == '' || dateInput.value == '' || moduleName.value == 'Select module') {
            return;
        }

        if (!(Array.from(courses.children).map(a => a.id)).includes(moduleName.value)) {

            const module = createElement('div', ['class=module', `id=${moduleName.value}`],
                createElement('h3', [], `${moduleName.value}-MODULE`.toUpperCase()),
                createElement('ul', [], ''));
            courses.appendChild(module);

        }
        const moduleUl = document.getElementById(moduleName.value).children[1];
        let formattedDate = dateInput.value.replace(/-/g, '/').replace('T', ' - ');

        const lecture = createElement('li', ['class=flex', `id=${lectureName.value}`, `date=${dateInput.value}`],
            createElement('h4', [], `${lectureName.value} - ${formattedDate}`),
            createElement('button', ['class=red'], 'Del'));

        moduleUl.appendChild(lecture);
        let sortedLectures = Array.from(moduleUl.children).sort((a, b) => a.getAttribute('date').localeCompare(b.getAttribute('date')));
        sortedLectures.forEach(li => moduleUl.appendChild(li));
        lectureName.value = '';
        dateInput.value = '';
        moduleName.value = 'Select module';

    }

    function del(event) {
        const target = event.target;
        if (target.tagName == 'BUTTON') {
            if (target.parentNode.parentNode.children.length == 1) {
                target.parentNode.parentNode.parentNode.remove();
            } else {
                target.parentNode.remove();
            }
        }
    }

    function createElement(type, attributes = [], ...content) {
        const result = document.createElement(type);
        if (attributes.length > 0) {
            attributes.forEach((e) => {
                let [attribute, value] = e.split('=');
                result.setAttribute(attribute, value);
            });
        }
        content.forEach(e => {
            if (typeof e == 'string') {
                let text = document.createTextNode(e);
                result.appendChild(text);
            } else {
                result.appendChild(e);
            }
        });
        return result;
    }
};