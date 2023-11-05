/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/atjsUtilities.js":
/*!*****************************!*\
  !*** ./js/atjsUtilities.js ***!
  \*****************************/
/*! exports provided: formatMinutesSeconds, loadJSON, getRandomInt, getLastPartOfURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatMinutesSeconds\", function() { return formatMinutesSeconds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadJSON\", function() { return loadJSON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomInt\", function() { return getRandomInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLastPartOfURL\", function() { return getLastPartOfURL; });\n\n// Uitility functions\nconst formatMinutesSeconds = function(mins, secs) {\n  return `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;\n};\n\nconst loadJSON = async function(path, callback) {\n  let response = await fetch(path);\n  let obj = await response.json();\n  \n  if (typeof callback === 'function') {\n    callback(obj);\n  };\n};\n\nconst getRandomInt = function(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min + 1)) + min;  \n};\n\nconst getLastPartOfURL = function(url) {\n  const reg = /([a-z0-9\\-._~%!$&'()*+,;=:@]+)\\.[a-z0-9]{2,3}$/gi;\n  return url.match(reg)[0];\n};\n\n\n\n//# sourceURL=webpack:///./js/atjsUtilities.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: videoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"videoList\", function() { return videoList; });\n/* harmony import */ var _atjsUtilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atjsUtilities.js */ \"./js/atjsUtilities.js\");\n/* harmony import */ var _randomVideo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./randomVideo.js */ \"./js/randomVideo.js\");\n\n\n\nlet videoList = [];\n\n//load JSON data\nObject(_atjsUtilities_js__WEBPACK_IMPORTED_MODULE_0__[\"loadJSON\"])('../videos.json', (obj) => {\n  videoList = obj.videos;\n  Object(_randomVideo_js__WEBPACK_IMPORTED_MODULE_1__[\"randomizeVideo\"])();\n});\n\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/randomVideo.js":
/*!***************************!*\
  !*** ./js/randomVideo.js ***!
  \***************************/
/*! exports provided: videoList, randomizeVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomizeVideo\", function() { return randomizeVideo; });\n/* harmony import */ var _atjsUtilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atjsUtilities.js */ \"./js/atjsUtilities.js\");\n/* harmony import */ var _videoPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoPlayer.js */ \"./js/videoPlayer.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"videoList\", function() { return _main_js__WEBPACK_IMPORTED_MODULE_2__[\"videoList\"]; });\n\n\n\n\n\nconst video = document.getElementById('video'),\n      controller = document.getElementById('controller'),\n      randomizeBtn = document.getElementById('randomize');\n\n// Randomize Video\nconst randomizeVideo = function() {\n  Object(_videoPlayer_js__WEBPACK_IMPORTED_MODULE_1__[\"videoStop\"])(); // If video is playing, pause it.\n  let currentVideo = Object(_atjsUtilities_js__WEBPACK_IMPORTED_MODULE_0__[\"getLastPartOfURL\"])(video.src);\n  let newVideoList = _main_js__WEBPACK_IMPORTED_MODULE_2__[\"videoList\"].filter((val) => val !== currentVideo);\n  let vid = newVideoList[Object(_atjsUtilities_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, newVideoList.length - 1)];\n  video.src = `video\\\\${vid}`;\n  setTimeout(() => controller.value = 0, 0); //Set the controller back to starting point.\n};\n\nrandomizeBtn.addEventListener('click', (e) => {\n  randomizeVideo();\n  Object(_videoPlayer_js__WEBPACK_IMPORTED_MODULE_1__[\"videoPlayPause\"])();\n});\n\n\n\n//# sourceURL=webpack:///./js/randomVideo.js?");

/***/ }),

/***/ "./js/videoPlayer.js":
/*!***************************!*\
  !*** ./js/videoPlayer.js ***!
  \***************************/
/*! exports provided: videoPlayPause, videoStop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"videoPlayPause\", function() { return videoPlayPause; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"videoStop\", function() { return videoStop; });\n/* harmony import */ var _atjsUtilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atjsUtilities.js */ \"./js/atjsUtilities.js\");\n\n\nconst video = document.getElementById('video'),\n      stopBtn = document.getElementById('stop'),\n      playBtn = document.getElementById('play'),\n      time = document.getElementById('time'),\n      controller = document.getElementById('controller');\n\n//Video functions\nconst videoPlayPause = function() {\n  (video.paused) ? video.play() : video.pause();\n};\n\nconst updatePlayIcon = function() {\n  playBtn.innerHTML = (video.paused) ? '<i class=\"fas fa-play fa-2x\"></i>' : '<i class=\"fas fa-pause fa-2x\"></i>';\n};\n\nconst videoStop = function() {\n  video.pause();\n  video.currentTime = 0;\n};\n\nconst updateController = function() {\n  controller.value = (video.currentTime / video.duration) * 100;\n};\n\nconst updateTime = function() {\n  let mins = Math.floor(video.currentTime / 60),\n      secs = Math.floor(video.currentTime % 60);\n\n  time.innerHTML = Object(_atjsUtilities_js__WEBPACK_IMPORTED_MODULE_0__[\"formatMinutesSeconds\"])(mins, secs);\n};\n\nconst setVideoProgress = function() {\n  video.currentTime = (+controller.value * video.duration) / 100;\n};\n\n// Event Listeners\nplayBtn.addEventListener('click', videoPlayPause);\n\nstopBtn.addEventListener('click', videoStop);\n\ncontroller.addEventListener('change', setVideoProgress);\ncontroller.addEventListener('mousedown', () => video.pause());\ncontroller.addEventListener('mouseup', () => video.play());\n\nvideo.addEventListener('click', videoPlayPause);\nvideo.addEventListener('pause', updatePlayIcon);\nvideo.addEventListener('play', updatePlayIcon);\nvideo.addEventListener('timeupdate', (e) => {\n  updateController(e);\n  updateTime(e);\n});\n\n\n\n//# sourceURL=webpack:///./js/videoPlayer.js?");

/***/ })

/******/ });