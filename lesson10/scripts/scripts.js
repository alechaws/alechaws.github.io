var weatherObject =  new XMLHttpRequest();
weatherObject.open('GET','http://api.openweathermap.org/data/2.5/weather?zip=02111,us&appid=6eac7e39498499a5967dcc07fc168e3f&units=imperial',true);

weatherObject.send();

weatherObject.onload = function(){
    var weatherInfo= JSON.parse(weatherObject.responseText)
    console.log(weatherInfo);

    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

    var iconcode = weatherInfo.weather[0].icon;
    var icon_path= "http://openweathermap.org/img/w/"+iconcode+".png";
    document.getElementById('weather_icon').src = icon_path;
}
