function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'google_maps.json', true); 
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var responseText = xobj.responseText;
            // Parse JSON string into object
            var actual_JSON = JSON.parse(responseText);
            callback(actual_JSON);
        }
    };
    xobj.send(null);  
}

function viewJSON() {
    loadJSON(function(response) {
        /* Aqui l'objecte response representa l'objecte JSON que ens 
           ha retornat el servidor */
           document.getElementById("results").innerHTML = "<ul>";
           for (rest in response.results) {

        document.getElementById("results").innerHTML =
        document.getElementById("results").innerHTML + "<li>"+
        response.results[rest].name+", "
        +"Coordenades: "+response.results[rest].geometry.location.lat+" latitud, "
        +response.results[rest].geometry.location.lng+" longitud, "
        +"adreça: "+ response.results[rest].vicinity+", "
        +"Tipus d'establiment: "+response.results[rest].types+"</li>";
           }
           document.getElementById("results").innerHTML =
           document.getElementById("results").innerHTML + "</ul>"
    });
}

