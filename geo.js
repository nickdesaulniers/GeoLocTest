document.addEventListener('DOMContentLoaded', function () {
  if (!navigator.geolocation) return;
  let $ = document.getElementById.bind(document),
      logEle = $('log'),
      watchPositionEle = $('watchPosition'),
      watchID = null,
      domWrite = function domWrite (msg) {
        log.appendChild(document.createTextNode(msg));
        log.appendChild(document.createElement('br'));
      },
      clear = function clear () {
        logEle.innerHTML = '';
      },
      success = function success (position) {
        let [lat, lon] = [position.coords.latitude, position.coords.longitude];
        domWrite('lat: ' + lat + ', lon:' + lon);
      },
      error = function error (e) {
        switch (e.code) {
          case 0: domWrite('Unknown Error'); break;
          case 1: domWrite('Permission Denied'); break;
          case 2: domWrite('Position Unavailable'); break;
          case 3: domWrite('Timed Out'); break;
          default: domWrite('Unknown error code: ' + e.code); break;
        }
      },
      config = { timeout: 5000, enableHighAccuracy: false, maximumAge: 1000 },
      getCurrentPosition = function getCurrentPosition () {
        navigator.geolocation.getCurrentPosition(success, error, config);
      },
      watchPosition = function watchPosition () {
        if (watchPositionEle.textContent === 'stop') {
          watchPositionEle.textContent = 'watchPosition';
          navigator.geolocation.clearWatch(watchID);
        } else {
          watchPositionEle.textContent = 'stop';
          watchID = navigator.geolocation.watchPosition(success, error, config);
        }
      };

  $('getCurrentPosition').addEventListener('click', getCurrentPosition);
  watchPositionEle.addEventListener('click', watchPosition);
  $('clear').addEventListener('click', clear);
});