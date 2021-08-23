$("document").ready(function () {
  // This is the location marker that we will be using on the map. Let's store a reference to it here so that it can be updated in several places.
  var myLat = null;
  var myLng = null;
  var myLocation = null;

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    myLat = crd.latitude.toFixed(5);
    myLng = crd.longitude.toFixed(5);

    console.log(myLat);
    console.log(myLng);

    var weatherAPI =
      "https://weather.kencruz.ca/weather?lat=" + myLat + "&lon=" + myLng;

    console.log(weatherAPI);

    function convertTemp(kelvin, unit) {
      switch (unit) {
        case "C":
          kelvin = Math.round(kelvin - 273.15);
          break;
        case "F":
          kelvin = (1.8 * (kelvin - 273) + 32).toPrecision(2);
          break;
      }
      return kelvin;
    }

    // If I alert myLocation here, the coordinates are there.
    $.getJSON(weatherAPI, function (data) {
      var { weather, forecast } = JSON.parse(JSON.stringify(data));
      var icon =
        "https://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";
      var temp = weather.main.temp;
      var tempC = convertTemp(temp, "C");
      var tempF = convertTemp(temp, "F");
      var appLocation = weather.name;
      var appCountry = weather.sys.country;
      var weatherDescription = weather.weather[0].description;
      console.log(weather);
      console.log(appLocation);
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

      var streetViewUrl =
        "https://weather.kencruz.ca/streetview?lat=" + myLat + "&lon=" + myLng;
      console.log(streetViewUrl);

      var width;
      if ($(window).width() > 640) {
        width = 640;
      } else {
        width = $(window).width();
      }
      var length = Math.floor(width / 2);
      //$('.app').append('<img class="img-responsive" src="' + streetViewUrl + '">');
      //$('.main').css('padding-top', '' + (length/3) + 'px');
      $(".background-blur").css(
        "background",
        'linear-gradient(rgba(127, 199, 228, 0.3), rgba(0, 0, 0, 0.0)), url("' +
          streetViewUrl +
          '")'
      );
      $(".background-blur").css("background-position", "center");
      $(".background-blur").css("background-size", "cover");
      $(".app").css("height", "" + length + "");
      $(".city").append("<h5>" + appLocation + ", " + appCountry + "</h5>");
      $(".icon").append(
        '<img class="iconMain" src="' +
          icon +
          '">' +
          "<br>" +
          "<h5>" +
          weatherDescription +
          "</h5>"
      );
      $(".temp").html(
        "<h5>Temperature:</h5>" + "<h5>" + tempC + "&deg C" + "</h5>"
      );

      console.log(forecast);

      for (var i = 1; i < forecast.list.length; i++) {
        var selector = "#" + i;
        var theDay = convertDate(forecast.list[i].dt);
        var icon =
          "https://openweathermap.org/img/w/" +
          forecast.list[i].weather[0].icon +
          ".png";
        //$(selector).append('' + theDay.day);
        //$(selector).append('<img src="' + icon + '">');
        //$(selector).append(convertTemp(forecast.list[i].temp.day, "C") +"C");
        $(selector).html(
          "<ul>" +
            '<li class="day">' +
            theDay.day +
            "</li>" +
            "<li>" +
            '<img src="' +
            icon +
            '">' +
            "</li>" +
            "<li>" +
            convertTemp(forecast.list[i].temp.day, "C") +
            "&deg" +
            "C" +
            "</li>" +
            "<ul>"
        );
      }
    });

    function convertDate(time) {
      var date = new Date(time * 1000);

      function convertWeekDay(day) {
        var weekDay = "";
        switch (day) {
          case 0:
            weekDay = "Sunday";
            break;
          case 1:
            weekDay = "Monday";
            break;
          case 2:
            weekDay = "Tuesday";
            break;
          case 3:
            weekDay = "Wednesday";
            break;
          case 4:
            weekDay = "Thursday";
            break;
          case 5:
            weekDay = "Friday";
            break;
          case 6:
            weekDay = "Saturday";
            break;
        }
        return weekDay;
      }

      return {
        month: date.getMonth(),
        date: date.getDate(),
        day: convertWeekDay(date.getDay()),
        year: date.getFullYear(),
      };
    }
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
});
