var weatherContainer = document.querySelectorAll('#all h2 span');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        console.log(apiResult);

        // var cityName = document.createTextNode(apiResult.name.cityName);
        // textContainer[0].appendChild(cityName);

        weatherContainer[0].innerHTML = apiResult.name;
        weatherContainer[1].innerHTML = apiResult.weather.icon;


    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=32601,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
