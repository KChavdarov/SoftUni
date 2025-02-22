export async function createNavigation(main, nav) {
    const links = {};
    const views = {};

    setupNavigation();

    const navigation = {
        setUserNav,
        registerView,
        goTo,
    }

    return navigation;

    function registerView(name, section, setupView, navId) {
        const view = setupView(section, navigation);
        views[name] = view;
        if (navId) {
            links[navId] = name;
        }
    }

    async function goTo(name, ...params) {
        const section = await views[name](...params);
        const [linkId] = Object.entries(links).find(([k, v]) => v == name) || [];
        setActiveNav(linkId);
        main.innerHTML = ''
        main.appendChild(section);
    }


    function setupNavigation() {
        nav.addEventListener('click', (ev) => {
            if (ev.target.tagName == 'A') {
                ev.preventDefault();
                const viewName = links[ev.target.id];
                if (viewName) {
                    goTo(viewName);
                }
            }
        });
        nav.parentElement.querySelector('h1').addEventListener('click', (ev) => {
            ev.preventDefault();
            goTo('home');
        })
    }

    function setActiveNav(targetId) {
        [...nav.querySelectorAll('a')].forEach(a => a.id == targetId ? a.classList.add('active') : a.classList.remove('active'));
    }

    function setUserNav() {
        if (sessionStorage.getItem('authToken') != null) {
            document.getElementById('user').style.display = 'inline-block';
            document.getElementById('guest').style.display = 'none';
        } else {
            document.getElementById('user').style.display = 'none';
            document.getElementById('guest').style.display = 'inline-block';
        }
    }
}