
// Uitility functions
const formatMinutesSeconds = function(mins, secs) {
  return `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
};

const loadJSON = async function(path, callback) {
  let response = await fetch(path);
  let obj = await response.json();
  
  if (typeof callback === 'function') {
    callback(obj);
  };
};

const getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;  
};

const getLastPartOfURL = function(url) {
  const reg = /([a-z0-9\-._~%!$&'()*+,;=:@]+)\.[a-z0-9]{2,3}$/gi;
  return url.match(reg)[0];
};

export { formatMinutesSeconds, loadJSON, getRandomInt, getLastPartOfURL };