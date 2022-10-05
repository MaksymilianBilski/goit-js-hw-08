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

window.addEventListener(
  'load',
  player
    .setCurrentTime(localStorage.getItem('current', currentTime))
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
    })
);
console.log(localStorage);
