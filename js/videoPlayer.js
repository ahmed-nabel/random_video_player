import { formatMinutesSeconds } from './atjsUtilities.js';

const video = document.getElementById('video'),
      stopBtn = document.getElementById('stop'),
      playBtn = document.getElementById('play'),
      time = document.getElementById('time'),
      controller = document.getElementById('controller');

//Video functions
const videoPlayPause = function() {
  (video.paused) ? video.play() : video.pause();
};

const updatePlayIcon = function() {
  playBtn.innerHTML = (video.paused) ? '<i class="fas fa-play fa-2x"></i>' : '<i class="fas fa-pause fa-2x"></i>';
};

const videoStop = function() {
  video.pause();
  video.currentTime = 0;
};

const updateController = function() {
  controller.value = (video.currentTime / video.duration) * 100;
};

const updateTime = function() {
  let mins = Math.floor(video.currentTime / 60),
      secs = Math.floor(video.currentTime % 60);

  time.innerHTML = formatMinutesSeconds(mins, secs);
};

const setVideoProgress = function() {
  video.currentTime = (+controller.value * video.duration) / 100;
};

// Event Listeners
playBtn.addEventListener('click', videoPlayPause);

stopBtn.addEventListener('click', videoStop);

controller.addEventListener('change', setVideoProgress);
controller.addEventListener('mousedown', () => video.pause());
controller.addEventListener('mouseup', () => video.play());

video.addEventListener('click', videoPlayPause);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', (e) => {
  updateController(e);
  updateTime(e);
});

export { videoPlayPause, videoStop };