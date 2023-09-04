var countDownDate = new Date("May 23, 2025").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();

    var timeLeft = countDownDate-now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("large-text-timer").innerHTML = days + "d ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Probably Graduated By Now";
      }

    
}, 1000);
