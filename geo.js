document.addEventListener('DOMContentLoaded', function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    let [lat, lon] = [position.coords.latitude, position.coords.longitude];
    document.body.textContent = 'lat: ' + lat + ', lon:' + lon;
  });
});