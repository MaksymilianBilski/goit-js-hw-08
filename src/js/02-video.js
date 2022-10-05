import vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new vimeo(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player
  .getCurrentTime()
  .then(function (seconds) {
    // seconds = the current playback position
  })
  .catch(function (error) {
    // an error occurred
  });
