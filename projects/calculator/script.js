$(document).ready(function() {
  function displayCalc() {
    var buttons = [
      ["<i class='fa fa-twitter'></i>", "https://www.twitter.com/cenkruz"],
      ["<i class='fa fa-linkedin'></i>", "https://ca.linkedin.com/in/cruzken"],
      ["<i class='fa fa-fire'></i>", "https://www.freecodecamp.com/cruzken"], "C", "7", "8", "9", "/", "4", "5", "6", "X", "1", "2", "3", "-", "0", ".", "=", "+"
    ];
    var rows = 5;
    var cols = 4;
    var buttonCount = 0;
    for (var i = 0; i < rows; i++) {
      $(".container").append('<div class="row ' + i + '"></div>');
      var currentRow = "." + i;
      for (var j = 0; j < cols; j++) {
        if (buttons[buttonCount].length === 1) {
          $(currentRow).append('<div class="col-xs-3"><button type="button" class="btn btn-default" id="input">' + buttons[buttonCount] + '</button></div>');
        } else {
          $(currentRow).append('<div class="col-xs-3"><a href=' + buttons[buttonCount][1] + ' class="btn btn-default" target="_blank">' + buttons[buttonCount][0] + '</button></div>');
        }
        buttonCount++;
      }
    }
  }
  var screenDisplay = "";
  var total = 0;
  var currentValue = 0;
  var currentOperator = "";
  var decimal = false;
  function inputButtons() {
    $("button").on("click", function() {
      var thisButton = $(this).text();
      if ((thisButton === "." || !isNaN(thisButton)) && screenDisplay.length < 10) {
        if (thisButton === ".") {
          if (decimal === true) {
          } else {
            decimal = true;
            screenDisplay += thisButton;
          }
        } else {
          screenDisplay += thisButton;
          currentValue = Number(screenDisplay);
          $(".screen").text(screenDisplay);
        }
      } else {
        switch (thisButton) {
          case "C":
            total = 0;
            screenDisplay = "";
            currentOperator = "";
            $(".screen").text(total);
            break;
          case "+":
            checkOperater();
            currentOperator = "plus";
            break;
          case "-":
            checkOperater();
            currentOperator = "minus";
            break;
          case "X":
            checkOperater();
            currentOperator = "times";
            break;
          case "/":
            checkOperater();
            currentOperator = "divide";
            break;
          case "=":
            checkOperater();
            currentOperator = "";
            break;
        }
      }
      function checkOperater() {
        decimal = false;
        if (total === 0) {
          total = currentValue;
        }
        switch (currentOperator) {
          case "plus":
            total += currentValue;
            break;
          case "minus":
            total -= currentValue;
            break;
          case "times":
            total *= currentValue;
            break;
          case "divide":
            total /= currentValue;
            break;
        }
        screenDisplay = "";
        $(".screen").text(total);
      }
    });
  }
  displayCalc();
  inputButtons();
});