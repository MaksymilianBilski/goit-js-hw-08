import vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new vimeo(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

// przypisanie aktualnego czasu do zmiennej
let currentTime = 0;

player.on('timeupdate', function () {
  player
    .getCurrentTime()
    .then(function (seconds) {
      currentTime = seconds;
      localStorage.setItem('current', currentTime);
    })
    .catch(function (error) {
      error = 'some ting go wung';
      return error;
    });
});
localStorage.getItem('current', currentTime);

const fromStorageTime = () => {
  player
    .setCurrentTime(localStorage.getItem('current', currentTime))
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;
        default:
          break;
      }
    });
};

window.addEventListener('load', fromStorageTime);
