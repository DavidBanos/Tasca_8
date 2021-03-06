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
            document.getElementById("results").innerHTML + "<li><strong>"+
            response.results[rest].name+". </strong>"
            +"<i>Coordenades: </i>"+response.results[rest].geometry.location.lat+" latitud, "
            +response.results[rest].geometry.location.lng+" longitud. "
            +"<i>Adreça: </i>"+ response.results[rest].vicinity+". "
            +"<i>Tipus d'establiment: </i>"+response.results[rest].types+". "
            +"<i>Icona: </i><img src ="+response.results[rest].icon+"></li>";
        }
        console.log(document.getElementById("results").innerHTML);
        document.getElementById("results").innerHTML =
        document.getElementById("results").innerHTML + "</ul>"
        // Aquesta funció recorre l'objecte JSON que ens ha retornat el servidor i ens mostra la lliste de resultats
    });
}

