import vimeo from '@vimeo/player';
import _ from '/node_modules/lodash.throttle/index.js';
var throttle = require('lodash.throttle');
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

const readStorageTime = () => {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', currentTime);
      currentTime = seconds;
      console.log(currentTime);
    })
    .catch(function (error) {
      error = 'some ting go wung';
      return error;
    });
};

const playFromStorageTime = () => {
  player
    .setCurrentTime(
      localStorage.getItem('videoplayer-current-time', currentTime)
    )
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
window.addEventListener('load', playFromStorageTime);
player.on('timeupdate', throttle(readStorageTime, 1000));
