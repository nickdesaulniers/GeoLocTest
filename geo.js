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
      switch (error.code) {
        case 1: domWrite('Permission Denied'); break;
        case 2: domWrite('Position Unavailable'); break;
        case 3: domWrite('Timed Out'); break;
      }
    });
  } else {
    domWrite('No navigatior.geolocation');
  }
});