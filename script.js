$(function(){
    $.getJSON('https://ipapi.co/json/', function(data){
        console.log(data);
        $("#mydata").html(data.ip);
        $("#city").html(data.city);
        $("#region").html(data.region);
        $("#country").html(data.country);
        $("#postal_code").html(data.postal);
        $("#latitude").html(data.latitude);
        $("#longitude").html(data.longitude);
        $("#timezone").html(data.timezone);
        $("#currency").html(data.currency);
    });
});








