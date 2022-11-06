// import vimeo from '@vimeo/player';
// import _ from '/node_modules/lodash.throttle/index.js';
// var throttle = require('lodash.throttle');
// const iframe = document.querySelector('iframe');
// const player = new vimeo(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// // przypisanie aktualnego czasu do zmiennej
// let currentTime = 0;

// const readStorageTime = () => {
//   player
//     .getCurrentTime()
//     .then(function (seconds) {
//       localStorage.setItem('videoplayer-current-time', currentTime);
//       currentTime = seconds;
//       console.log(currentTime);
//     })
//     .catch(function (error) {
//       error = 'some ting go wung';
//       return error;
//     });
// };

// const playFromStorageTime = () => {
//   player
//     .setCurrentTime(
//       localStorage.getItem('videoplayer-current-time', currentTime)
//     )
//     .then(function (seconds) {})
//     .catch(function (error) {
//       switch (error.name) {
//         case 'RangeError':
//           break;
//         default:
//           break;
//       }
//     });
// };
// window.addEventListener('load', playFromStorageTime);
// player.on('timeupdate', throttle(readStorageTime, 1000));

import vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
let currentTime = 0;

const iframe = document.querySelector('iframe');
const player = new vimeo(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function getTime() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      currentTime = seconds;
      localStorage.setItem('videoplayer-current-time', currentTime);
      console.log(localStorage);
      // seconds = the current playback position
    })
    .catch(function (error) {
      // an error occurred
    });
}

function readTime() {
  player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}

player.on('timeupdate', throttle(getTime, 1000));
window.addEventListener('load', readTime);
