$(window).load(function() {
    var d = new Date();
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    $("#diaActual").html(day + "/" + month + "/" + year);
 });

function callWeatherApi(){
    var nomCiudad = $("#txtCiudad").val();
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather",
        type: "GET",
        dataType: "json",
        data: {q: nomCiudad, appid: "1573c2baa2cfe07cb8ee524834829651", lang: "es", units: "metric"},
        success: function(response){
            console.log("success",response);
            $("#mensaje").text(response.weather[0].description);
        },error: function(response){
            console.log("error",response);
            $("#mensaje").text("No hay nadie!");
        }
    });
}

function myMap() {
        var mapOptions = {
            center: new google.maps.LatLng(-34.907281, -56.206329),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-34.907281, -56.206329),
        map: map
    });
}

function openPanel() {
    $( "#panel" ).panel( "open");
}