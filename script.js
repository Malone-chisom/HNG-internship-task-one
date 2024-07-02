// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('.section');

//     const utcTimeElement = document.getElementById('utc-time');
//     const dayOfWeekElement = document.getElementById('day-of-week');

//     const options = {
//         threshold: 0.1
//     };

//     const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.animation = 'fadeIn 1s ease-in';
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, options);

//     sections.forEach(section => {
//         fadeInOnScroll.observe(section);
//     });

//     // Set current year in footer
//     const currentYearElement = document.getElementById('current-year');
//     const currentYear = new Date().getFullYear();
//     currentYearElement.textContent = currentYear;

     
//     // Set current time in UTC and day of the week
//     function updateTimeAndDay() {
//         const now = new Date();
//         const utcTime = now.toUTCString().split(' ')[4];
//         const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

//         utcTimeElement.textContent = utcTime;
//         dayOfWeekElement.textContent = dayOfWeek;
//     }

//     updateTimeAndDay();
//     setInterval(updateTimeAndDay, 60000); // Update time every minute
// });
