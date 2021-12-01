import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(updateCurrentTime, 1000));

player.setCurrentTime(Number(localStorage.getItem('videoplayer - current - time')));

function updateCurrentTime(data) {
  console.log(data);
  localStorage.setItem('videoplayer - current - time', JSON.stringify(data.seconds));
}
