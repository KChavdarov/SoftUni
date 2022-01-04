export function setupHome(section, navigation) {
    section.querySelector('a.btn.btn-secondary.btn-lg').addEventListener('click', event => { event.preventDefault(); navigation.goTo('dashboard'); });
    return showHome;

    function showHome() {
        return section;
    }
}