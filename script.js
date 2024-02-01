var redColor = document.getElementById('red');
var yellowColor = document.getElementById("yellow");
var greenColor = document.getElementById("green");

redColor.addEventListener('click', function () {
    var redMessage = document.getElementById('message')
    redMessage.setAttribute("class", "text-danger text-uppercase fw-bolder");
    redMessage.textContent = 'Cars must stop now'
});

yellowColor.addEventListener("click", function () {
    var yellowMessage = document.getElementById("message");
    yellowMessage.setAttribute("class", "text-warning text-uppercase fw-bolder");
  yellowMessage.textContent = "Cars must slow down the spend";
});

greenColor.addEventListener("click", function () {
    var greenMessage = document.getElementById("message");
    greenMessage.setAttribute("class", "text-green text-uppercase fw-bolder");
  greenMessage.textContent = "Cars must go go go";
});
