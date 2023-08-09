var dest = new Date("dec31 , 2023 24:00:00").getTime();

var x = setInterval(function() {



var now = new Date().getTime();

var diff = dest-now ;

var days = Math.floor(diff / (1000*60*60*24));

var hours = Math.floor((diff % (1000*60*60*24))/(1000*60*60));


var min = Math.floor((diff%(1000*60*60))/(1000*60));


var sec = Math.floor((diff%(1000*60))/1000);

document.getElementById("demo").innerHTML = days + 'd, ' +  hours + "hrs: " + min + "m: " + sec + "s "



}, 1000); 