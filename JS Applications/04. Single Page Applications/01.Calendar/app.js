const yearSelect = document.getElementById('years');
const years = [...document.getElementsByClassName('monthCalendar')].reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
}, {});
const months = [...document.getElementsByClassName('daysCalendar')].reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
}, {});

const monthCode = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
};

displaySection(yearSelect);

yearSelect.addEventListener('click', event => {
    event.stopImmediatePropagation();
    if (event.target.classList.contains('day') || event.target.classList.contains('date')) {
        const yearId = `year-${event.target.textContent.trim()}`;
        const year = years[yearId];
        displaySection(year);
    }
});

document.body.addEventListener('click', event => {
    if (event.target.tagName == 'CAPTION') {
        const sectionId = document.querySelector('section').id;
        if (sectionId.includes('year-')) {
            displaySection(yearSelect);
        } else if (sectionId.includes('month-')) {
            const year = sectionId.match(/\d{4}/)[0];
            displaySection(years[`year-${year}`]);
        }
    } else if (event.target.tagName == 'TD' || event.target.tagName == 'DIV') {
        const month = monthCode[`${event.target.textContent.trim()}`];
        const year = document.querySelector('caption').textContent.trim();
        const section = months[`month-${year}-${month}`];
        displaySection(section);
    }
});

function displaySection(section) {
    document.body.textContent = '';
    document.body.appendChild(section);
}