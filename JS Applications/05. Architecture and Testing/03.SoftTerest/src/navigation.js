export function createNavigation(main, nav) {
    const views = {};
    const links = {};

    const navigation = {
        setUserNav,
        registerView,
        goTo,
    };

    setupNavigation();

    return navigation;

    function setupNavigation() {
        setUserNav();
        nav.addEventListener('click', event => {
            if (event.target.tagName == 'A' || event.target.tagName == 'IMG') {
                event.preventDefault();
                const targetId = event.target.id;
                const viewName = links[targetId];
                goTo(viewName);
            }
        });
        nav.querySelector('button.navbar-toggler').addEventListener('click', event => {
            const navLinks = nav.querySelector('#navbarResponsive');
            if (navLinks.style.display == 'block') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'block';
            }
        });
    }

    function setUserNav() {
        if (sessionStorage.getItem('authToken') != null) {
            [...document.querySelectorAll('li.user')].map(li => li.style.display = 'list-item');
            [...document.querySelectorAll('li.guest')].map(li => li.style.display = 'none');
        } else {
            [...document.querySelectorAll('li.user')].map(li => li.style.display = 'none');
            [...document.querySelectorAll('li.guest')].map(li => li.style.display = 'list-item');
        }
    }

    function registerView(name, section, setup, navId) {
        const view = setup(section, navigation);
        views[name] = view;
        if (navId) {
            links[navId] = name;
        }
    }

    async function goTo(name, ...params) {
        const section = await views[name](...params);
        main.innerHTML = '';
        main.appendChild(section);
    }
}