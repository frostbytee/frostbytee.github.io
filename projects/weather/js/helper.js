console.log(
  "Wind: " + weather.wind.speed + " knots " + getCompass(weather.wind.deg)
);

function getCompass(deg) {
  var direction = "";
  if (deg > 270 || deg < 90) {
    direction += "N";
  } else {
    direction += "S";
  }
  if (deg > 180) {
    direction += "W";
  } else {
    direction += "E";
  }
  return direction;
}
