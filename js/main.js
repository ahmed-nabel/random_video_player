import { loadJSON } from './atjsUtilities.js';
import { randomizeVideo } from './randomVideo.js';

let videoList = [];

//load JSON data
loadJSON('../videos.json', (obj) => {
  videoList = obj.videos;
  randomizeVideo();
});

export { videoList };