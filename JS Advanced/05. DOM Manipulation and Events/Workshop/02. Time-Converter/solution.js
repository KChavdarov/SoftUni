// function attachEventsListeners() {
//     let days = document.getElementById('days');
//     let hours = document.getElementById('hours');
//     let minutes = document.getElementById('minutes');
//     let seconds = document.getElementById('seconds');

//     document.getElementById('daysBtn').addEventListener('click', convertDays);
//     document.getElementById('hoursBtn').addEventListener('click', convertHours);
//     document.getElementById('minutesBtn').addEventListener('click', convertMinutes);
//     document.getElementById('secondsBtn').addEventListener('click', convertSeconds);

//     function convertDays(event) {
//         let daysAsNum = Number(days.value);
//         hours.value = daysAsNum * 24;
//         minutes.value = daysAsNum * 1440;
//         seconds.value = daysAsNum * 86400;
//     }
//     function convertHours(event) {
//         let hoursasNum = Number(hours.value);
//         days.value = hoursasNum / 24;
//         minutes.value = hoursasNum * 60;
//         seconds.value = hoursasNum * 60 * 60;
//     }
//     function convertMinutes(event) {
//         let minutesAsNum = Number(minutes.value);
//         days.value = minutesAsNum / 60 / 24;
//         hours.value = minutesAsNum / 60;
//         seconds.value = minutesAsNum * 60;
//     }
//     function convertSeconds(event) {
//         let secondsAsNum = Number(seconds.value);
//         days.value = secondsAsNum / 86400;
//         hours.value = secondsAsNum / 60 / 60;
//         minutes.value = secondsAsNum / 60;
//     }
// }

function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    Array.from(document.querySelectorAll('input[type="button"]')).map(btn => btn.addEventListener('click', convert));

    function convert(event) {
        let conversions = {
            days(days) {
                hours.value = days * 24;
                minutes.value = days * 1440;
                seconds.value = days * 86400;
            },
            hours(hours) {
                days.value = hours / 24;
                minutes.value = hours * 60;
                seconds.value = hours * 60 * 60;
            },
            minutes(minutes) {
                days.value = minutes / 60 / 24;
                hours.value = minutes / 60;
                seconds.value = minutes * 60;
            },
            seconds(seconds) {
                days.value = seconds / 86400;
                hours.value = seconds / 60 / 60;
                minutes.value = seconds / 60;
            }
        };

        let inputField = event.target.parentNode.querySelector('input[type = "text"]');
        conversions[inputField.id](Number(inputField.value));
    }
}