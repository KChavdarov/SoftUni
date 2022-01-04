function notify(message) {
  const notificationDiv = document.querySelector('#notification');
  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block';
  notificationDiv.addEventListener('click', (event) => event.target.style.display = 'none');
}