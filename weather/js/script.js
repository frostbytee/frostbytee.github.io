$( "document").ready(function () {

	if (navigator.geolocation) {
	    // This is the location marker that we will be using on the map. Let's store a reference to it here so that it can be updated in several places.
	    var locationMarker = null;
	    var myLat = null;
	    var myLng = null;
	    var myLocation = null;

	    // Get the location of the user's browser using the native geolocation service.
	    navigator.geolocation.getCurrentPosition(
	        function (position) {
	            // Check to see if there is already a location. There is a bug in FireFox where this gets invoked more than once with a cached result.
	            if (locationMarker){
	                return;
	            }

	            // Log that this is the initial position.
	            console.log( "Initial Position Found" );

	            // Assign coordinates to global variables
	            myLat = position.coords.latitude;
	            myLng = position.coords.longitude;
	            myLocation = myLat + ", " + myLng;
	            console.log(myLocation);

	            var appID = "057a39b3e401d09f277fa880c5a192a5";
	            var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?lat=" + myLat + "&lon=" + myLng + "&appid=" + appID;
	            var forecastAPI = "http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + myLat + "&lon=" + myLng + "&cnt=7&appid=" + appID;

	            console.log(weatherAPI);

	            function convertTemp(kelvin, unit) {
	            	switch(unit) {
	            		case "C": 
	            			kelvin = Math.round((kelvin - 273.15));
	            			break;
	            		case "F":
	            			kelvin =  (1.8 * (kelvin - 273) + 32).toPrecision(2);
	            			break;
	            	}
	            	return kelvin;
	            }

	            // If I alert myLocation here, the coordinates are there.
	          	$.getJSON(weatherAPI,
			  		function(data) {
			  		var wat = JSON.parse(JSON.stringify(data));
			  		var icon = "http://openweathermap.org/img/w/" + wat.weather[0].icon + ".png";
			  		var temp = wat.main.temp;
			  		var tempC = convertTemp(temp, "C");
			  		var tempF = convertTemp(temp, "F");
			  		var appLocation = wat.name;
			  		var appCountry = wat.sys.country;
			  		var weatherDescription = wat.weather[0].description;
			  		console.log(wat);
			  		console.log(appLocation);
			  		console.log("Wind: " + wat.wind.speed + " knots " + getCompass(wat.wind.deg));

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

			  		function getAngle() {
			  			return Math.floor(Math.random() * 8) * 45;
			  		}

			  		var width;
			  		if ($(window).width() > 640) {
			  			width = 640;
			  		} else {
			  			width = $(window).width();
			  		}
			  		var length = Math.floor(width/2);
			  		var streetViewSize = width + "x" + length;
			  		var streetViewKey = "AIzaSyCMXA5D6seEv12ZjkDT-IfpTAbn_jnEK2g";
			  		var streetViewLocation = myLat + "," + myLng;
			  		var streetViewUrl = "https://maps.googleapis.com/maps/api/streetview?size=" + streetViewSize + "&location=" + streetViewLocation +"&key=" + streetViewKey + "&heading=" + getAngle();
			  		console.log(streetViewUrl);
			  		console.log("Angle is " + getAngle());

			  		//$('.app').append('<img class="img-responsive" src="' + streetViewUrl + '">');
			  		//$('.main').css('padding-top', '' + (length/3) + 'px');
			  		$('.app').css('background-image', 'url("' + streetViewUrl + '")');
			  		$('.app').css('height', '' + length + '');
			  		$('.city').append('<h5>' + appLocation + ", " + appCountry + '</h5>');
		  			$('.icon').append('<img class="iconMain" src="' + icon + '">' + '<br>' + '<h5>' + weatherDescription + '</h5>');
		  			$('.temp').html('<h5>Temperature:</h5>' + '<h5>' + tempC + '&deg C' + '</h5>');
		  		});
				
				$.getJSON(forecastAPI,
					function(data) {
						var forecast = JSON.parse(JSON.stringify(data));
						console.log(forecast);

						for (var i = 1; i < forecast.list.length; i++) {
							var selector = "#" + i;
							var theDay = convertDate(forecast.list[i].dt);
					  		var icon = "http://openweathermap.org/img/w/" + forecast.list[i].weather[0].icon + ".png";
							//$(selector).append('' + theDay.day);
							//$(selector).append('<img src="' + icon + '">');
							//$(selector).append(convertTemp(forecast.list[i].temp.day, "C") +"C");
							$(selector).html('<ul>' + '<li class="day">' + theDay.day + '</li>' + '<li>' + '<img src="' + icon + '">' + '</li>' + '<li>' + convertTemp(forecast.list[i].temp.day, "C") + '&deg' + "C" + '</li>' + '<ul>');
						}
					});
				
				function convertDate(time) {
					var date = new Date(time * 1000);

					function convertWeekDay(day) {
						var weekDay = "";
						switch(day) {
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
						"month": date.getMonth(),
						"date": date.getDate(),
						"day": convertWeekDay(date.getDay()),
						"year": date.getFullYear()
					};
				}
	        }
	    );
	}
});