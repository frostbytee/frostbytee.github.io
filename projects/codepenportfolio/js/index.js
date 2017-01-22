$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

var projects = [
{
  title: "First portfolio page",
  description: "HTML5 and CSS3",
  link: "http://cruzken.github.io/",
  profilepic: "http://cruzken.github.io/images/codepenportfolio/firstportfolio.jpg"
},
{
  title: "Online resume",
  description: "JS and jQuery",
  link: "http://cruzken.github.io/resume/",
  profilepic: "http://cruzken.github.io/images/codepenportfolio/onlineresume.jpg"
},
{
  title: "Frogger clone",
  description: "Object-oriented JS and Canvas",
  link: "http://cruzken.github.io/game/",
  profilepic: "http://cruzken.github.io/images/codepenportfolio/frogger.jpg"
},
{
  title: "Website optimization",
  description: "Compression, async, inline",
  link: "https://github.com/cruzken/FEND0415-P4",
  profilepic: "http://cruzken.github.io/images/codepenportfolio/wpo.jpg"
},
{
  title: "Portfolio 2",
  description: "HTML5, CSS3, and JS",
  link: "http://codepen.io/cruzken/full/epPoaQ",
  profilepic: "http://cruzken.github.io/images/codepenportfolio/portfolio2.jpg"
},
{
  title: "Random Quote Generator",
  description: "JS and jQuery",
  link: "http://codepen.io/cruzken/full/GpeZNR/",
  profilepic: "http://cruzken.github.io/images/codepenportfolio/randomquotegen.jpg"
},
{
  title: "Pomodoro Clock",
  description: "JS and jQuery",
  link: "http://codepen.io/cruzken/full/epojGQ",
  profilepic: "http://cruzken.github.io/images/codepenportfolio/pomodoro.jpg"
},
{
  title: "Basic Calculator",
  description: "Js and jQuery",
  link: "http://codepen.io/cruzken/full/yeYayL",
  profilepic: "http://cruzken.github.io/images/codepenportfolio/calculator.jpg"
},
{
  title: "Weather Forecast with Streetview",
  description: "Streetview and Openweather API",
  link: "http://codepen.io/cruzken/full/dGJxvy",
  profilepic: "http://cruzken.github.io/images/codepenportfolio/weather.jpg"
},
{
  title: "Burrito Masters",
  description: "[WIP] Live Feb 4th, 2016",
  link: "http://cruzken.github.io/bm",
  profilepic: "http://cruzken.github.io/images/codepenportfolio/bm.jpg"
}
]

var rows = Math.ceil(projects.length / 3);
var projectcount = projects.length - 1;

for (var i = 0; i < rows; i++) {
  console.log("row " + i);
  $("#portfolio").append('<div class="row text-center ' + i + '"></div>');
  var selectRow = "." + i;
  for (var j = 0; j < 3; j++) {
    if (projects[projectcount]) {
      $(selectRow).append('<div class="col-sm-4 project"><a href=' + projects[projectcount].link +' target="_blank"><img class="img-responsive center-block" src=' + projects[projectcount].profilepic + ' alt="Responsive image"></a><h4>' + projects[projectcount].title +'</h4>' + projects[projectcount].description + '</div>');
      console.log("project");
    } else {
      break;
    }
    projectcount--;
  }
}