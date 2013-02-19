document.addEventListener('DOMContentLoaded', function () {
  var domWrite = function domWrite (msg) {
    document.body.appendChild(document.createTextNode(msg));
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function success (position) {
      let [lat, lon] = [position.coords.latitude, position.coords.longitude];
      domWrite('lat: ' + lat + ', lon:' + lon);
    },
    function error (error) {
      domWrite(error.message);
    });
  } else {
    domWrite('No navigatior.geolocation');
  }
});