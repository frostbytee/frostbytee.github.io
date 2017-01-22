var t;
var b;
var timer = null;
var running = null;
var onBreak = null;
var audio = new Audio('http://www.oringz.com/oringz-uploads/sounds-829-losing-patience.mp3');

function getVars() {
  t = $("#myNumber").text() * 60;
  b = $("#myBreak").text() * 60;
}

function stop() {
  clearTimeout(timer);
  running = 0;
  $("#icon").html('<i class="fa fa-play"></i>');
}

function startCheck() {
  if (running === null) {
    getVars();
    myTimeout();
    running = 1;
    onBreak = false;
    $("#icon").html('<i class="fa fa-pause"></i>');
    $(".state").html('Work');
    changeColor("red");
  } else if (running != 1) {
      if (onBreak === true) {
        running = 1;
        myBreak();
        $("#icon").html('<i class="fa fa-pause"></i>');
        $(".state").html('Break');
        changeColor("blue");
      } else {
        myTimeout();
        running = 1;
        $("#icon").html('<i class="fa fa-pause"></i>');
        $(".state").html('Work');
        changeColor("red");
        }
  } else {
      stop();
      changeColor("yellow");
    }
}

function changeColor(color) {
  switch (color) {
    case "blue":
      color = "#66a3ff";
      break;
    case "yellow":
      color = "#ffffb3";
      break;
    case "red":
      color = "#F64747"
      break;
  }
  $("body").animate({
  	backgroundColor: color
  }, 1000);
    
}

var myTimeout = function() {
  if (t >= 0) {
    document.getElementById("demo").innerHTML = toMinutes(t);
    timer = setTimeout(myTimeout, 1000);
    t--;
  } else {
    onBreak = true;
    running = 0;
    audio.play();
    startCheck();
  }
};

var myBreak = function() {
  if (b >= 0) {
    document.getElementById("demo").innerHTML = toMinutes(b);
    timer = setTimeout(myBreak, 1000);
    b--;
  } else {
    getVars();
    running = 0;
    onBreak = false;
    audio.play();
    startCheck();
  }
};

function toMinutes(num) {
  if (num % 60 < 10) {
    return Math.floor(num / 60) + ":0" + (num %60);
  }
  return Math.floor(num / 60) + ":" + (num %60);
}

$( "#lowerTimer" ).click(function() {
  if ($("#myNumber").text() > 1) {
    if (running == 1) {
      changeColor("yellow");
    }
    $("#myNumber").text($("#myNumber").text() - 1);
    stop();
    getVars();
    running = null;
    document.getElementById("demo").innerHTML = toMinutes(t); 
  }
});
$( "#higherTimer" ).click(function() {
  if (running == 1) {
      changeColor("yellow");
  }
  $("#myNumber").text(parseInt($("#myNumber").text()) + 1);
  stop();
  getVars();
  running = null;
  document.getElementById("demo").innerHTML = toMinutes(t); 
});

$( "#lowerBreak" ).click(function() {
  if ($("#myBreak").text() > 1) {
    if (running == 1) {
      changeColor("yellow");
    }
    $("#myBreak").text($("#myBreak").text() - 1);
    stop();
    getVars();
    running = null;
    document.getElementById("demo").innerHTML = toMinutes(b); 
  }
});
$( "#higherBreak" ).click(function() {
  if (running == 1) {
      changeColor("yellow");
  }
  $("#myBreak").text(parseInt($("#myBreak").text()) + 1);
  stop();
  getVars();
  running = null;
  document.getElementById("demo").innerHTML = toMinutes(b); 
});

$( ".circle" ).click(function() {
  startCheck();
});