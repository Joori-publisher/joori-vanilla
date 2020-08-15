const COORDS = 'coords';
const API_KEY = '8cf9a5326b05f7d65055185e5fe65e5e';
const weather = document.querySelector(".js-weather");
const city = document.querySelector(".js-city");

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`
    ).then(function(response){
        return response.json()
     }).then(function(json){
         const main = json.weather[0].main;
         const temp = json.main.temp;
         const name = json.name;
         const icon = json.weather[0].icon;

        // console.log(temp,name);

        
        weather.innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png"> ${temp}℃ ${name}`;
        

     })
    
}

function saveCoords(coodsObj){
    localStorage.setItem(COORDS,JSON.stringify(coodsObj));
}

function handleGeoSuccess(position){
    //console.log(position);
    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude);

    const latitude= position.coords.latitude;
    const longitude= position.coords.longitude;
    const coodsObj={
        latitude:latitude,
        longitude:longitude
    };

    saveCoords(coodsObj);
    getWeather(latitude,longitude);
    
}
function handleGeoError(){
    console.log(`Can't access geo location`);
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}
function init(){
    loadCoords();
}

init();