//backend
var pingPong = function(n) {
  for (var i = 1; i <= n; i += 1) {

    if (i % 15 === 0) {
      $("#result").append("<li class='rem'>PingPong !</li>");
    } else if (i % 5 === 0) {
      $("#result").append("<li class='rem'>Pong</li>");
    } else if (i % 3 === 0) {
      $("#result").append("<li class='rem'>ping</li>");
    } else {
      $("#result").append("<li class='rem'>" + String(i) + "</li>");
    }
  }
}


//UI
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    $("li.rem").remove();
    event.preventDefault();
    var counTo = parseInt($("input#number").val());
    pingPong(counTo);
  });
});
