//! Сповіщення
const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const refsNotification = {
  notification: document.querySelector('.js-alert'),
};

refsNotification.notification.addEventListener('click', onNotificationClick);

showNotification();

function onNotificationClick() {
  hideNotification();
  clearTimeout(timeoutId);
}

function showNotification() {
  refsNotification.notification.classList.add('is-visible');

  timeoutId = setTimeout(() => {
    console.log('qerty');
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  refsNotification.notification.classList.remove('is-visible');
}
