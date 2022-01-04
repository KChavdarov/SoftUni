//initialize links,
//setup event listeners
// update active link 
// render view
// keep association between links and views

//export:
// - goTo - update active link; render view
// - setUserNav
// - register view

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

    async function goTo(name, ...params) {
        const linkId = Object.entries(links).find(([k, v]) => v == name) || [];
        setActiveNav(linkId[0]);

        const section = await views[name](...params);
        main.innerHTML = '';
        main.appendChild(section);
    }

    function registerView(name, section, setup, navId) {
        const view = setup(section, navigation);
        views[name] = view;
        if (navId) {
            links[navId] = name;
        }
    }


    function setupNavigation() {
        setUserNav();
        nav.addEventListener('click', (ev) => {
            if (ev.target.tagName == 'A' || ev.target.tagName == 'IMG') {
                const viewName = links[ev.target.id];
                ev.preventDefault();
                if (viewName) {
                    goTo(viewName);
                }
            }
        });
    }

    function setActiveNav(targetId) {
        [...nav.querySelectorAll('a')].forEach(a => (targetId && a.id == targetId && targetId != 'homeLink') ? a.classList.add('active') : a.classList.remove('active'));
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
