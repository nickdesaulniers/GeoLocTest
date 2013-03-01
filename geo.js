document.addEventListener('DOMContentLoaded', function () {
  let $ = document.getElementById.bind(document),
      logEle = $('log'),
      domWrite = function domWrite (msg) {
        log.appendChild(document.createTextNode(msg));
        log.appendChild(document.createElement('br'));
      },
      getCurrentPositionSuccess = function getCurrentPositionSuccess (position) {
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
      getCurrentPosition = function getCurrentPosition () {
        navigator.geolocation.getCurrentPosition(getCurrentPositionSuccess,
          error, { maximumAge: 600000 });
      },
      clear = function clear () {
        logEle.innerHTML = '';
      };

  $('getCurrentPosition').addEventListener('click', getCurrentPosition);
  $('clear').addEventListener('click', clear);
  domWrite('navigator.geolocation ' + (navigator.geolocation ? 'exists' : 'DNE'));
});