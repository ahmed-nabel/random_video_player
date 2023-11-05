import { getRandomInt, getLastPartOfURL } from './atjsUtilities.js';
import { videoStop, videoPlayPause } from './videoPlayer.js';
import { videoList } from './main.js';

const video = document.getElementById('video'),
      controller = document.getElementById('controller'),
      randomizeBtn = document.getElementById('randomize');

// Randomize Video
const randomizeVideo = function() {
  videoStop(); // If video is playing, pause it.
  let currentVideo = getLastPartOfURL(video.src);
  let newVideoList = videoList.filter((val) => val !== currentVideo);
  let vid = newVideoList[getRandomInt(0, newVideoList.length - 1)];
  video.src = `video\\${vid}`;
  setTimeout(() => controller.value = 0, 0); //Set the controller back to starting point.
};

randomizeBtn.addEventListener('click', (e) => {
  randomizeVideo();
  videoPlayPause();
});

export { videoList, randomizeVideo };