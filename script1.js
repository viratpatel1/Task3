var vp = new XMLHttpRequest();
vp.open('GET' ,'https://restcountries.eu/rest/v2/all',true)
vp.send();
vp.onload = function(){
    var country = JSON.parse(this.response);
    for(var i in country){
        try{
            var cname = country[i].name;
            var latlong = country[i].latlng;
            if(latlong == 0){
                ("Not Found")
            }
            weatherdata(cname,...latlong)
        }
        catch(e){
            console.log("Invalid "+cname);
        }
    }
}
var weatherdata=function(name,lat,lng){
    var URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0b981b72e95bf4758a6b4680401e65b7`
    var request = new XMLHttpRequest();
    request.open('GET',URL,true);
    request.send();
    request.onload = function(){
        var data = JSON.parse(this.response);
        console.log(`${name} : ${data.main.temp}`);
    }
}


// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=0b981b72e95bf4758a6b4680401e65b7