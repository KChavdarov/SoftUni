class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    };

    set online(value) {
        this._online = value;
        if (this.element) {
            const title = this.element.querySelector('.title');
            value ? title.classList.add('online') : title.classList.remove('online');
        }
    }
    get online() {
        return this._online;
    }

    render(id) {
        const contact = createElement('article', '',
            createElement('div', 'title', `${this.firstName} ${this.lastName}`,
                createElement('button', '', '&#8505;')),
            createElement('div', 'info',
                createElement('span', '', `&phone; ${this.phone}`),
                createElement('span', '', `&#9993; ${this.email}`)));
        const info = contact.querySelector('.info');
        const title = contact.querySelector('.title');
        if (this.online) {
            title.classList.add('online');
        }
        info.style.display = 'none';
        contact.querySelector('button').addEventListener('click', contactInfo);
        function contactInfo() {
            if (info.style.display == 'none') {
                info.style.display = 'block';
            } else {
                info.style.display = 'none';
            }
        }
        document.getElementById(id).appendChild(contact);
        this.element = contact;

        function createElement(type, cls, ...content) {
            const element = document.createElement(type);
            content.forEach(e => {
                if (typeof e == 'string') {
                    element.innerHTML = e;
                } else {
                    element.appendChild(e);
                }
            });
            if (cls) {
                element.classList.add(cls);
            }
            return element;
        }
    }
}


let contacts = [
    new Contact('Ivan', 'Ivanov', '0888 123 456', 'i.ivanov@gmail.com'),
    new Contact('Maria', 'Petrova', '0899 987 654', 'mar4eto@abv.bg'),
    new Contact('Jordan', 'Kirov', '0988 456 789', 'jordk@gmail.com')
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);