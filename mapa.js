var map;
var coord;

function initMap() {
 
    coord = {lat: 34.1186, lng: -118.3004}
    map = new google.maps.Map(document.getElementById('map'), {
        center: coord ,
        zoom: 13
    });
    const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Observatorio Griffith</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Observatorio Griffith</b> (Griffith Observatory en inglés) se encuentra en Los Ángeles, California, EE. UU. " +
        "Está ubicado en la zona sur de la Montaña Hollywood, en el Parque Griffith. Tiene vistas del Centro de Los Ángeles, " + 
        "Hollywood y el océano Pacífico. El observatorio es un lugar visitado tanto por turistas como por la población local y " + 
        "contiene una amplia selección de exposiciones relacionadas con el cosmos y la ciencia. Fue renovado desde el 2002 hasta " + 
        "el 2006, ampliando su espacio. Reabrió el 3 de noviembre de 2006 al público. </p>" +
    '<p>Atribución: Observatorio Griffith, <a href="https://es.wikipedia.org/wiki/Observatorio_Griffith">' +
    "https://es.wikipedia.org/wiki/Observatorio_Griffith</a></p>" +
    "</div>" +
    "</div>";
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        minWidth: $("#map").width() - 10
    });

    var marker = new google.maps.Marker({
        position: coord,
        map: map,
        title: 'Observatorio Griffith'
    });

    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
    
}

