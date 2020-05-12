function Get(url) { //function sending get request to 'url'
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    return xhr.responseText;
}
//prints the data received from the api,
// adds weather img codes link 
function print() {
    if (pin.value === "" || ccode.value === "") {
        alert("Input Both Pincode & Country Code");
        return;
    }
    let url = "https://api.openweathermap.org/data/2.5/weather?zip=" + pin.value + "," + ccode.value + "&APPID=710b59cc56adbbf39097008782d7c12d&units=metric";
    const response = JSON.parse(Get(url));
    console.log(response);

    let info = response.name + " <span class='accent'>/</span> " + response.sys.country;
    let a = response.weather[0].icon;
    let imgurl = "https://openweathermap.org/img/wn/" + a + "@2x.png";

    xTemp.innerHTML = Math.floor(response.main.temp) + "<sup class='accent' id='unit'>°C</sup>";
    xTempFeels.innerHTML = "Feels like: " + Math.floor(response.main.feels_like) + "<span class='accent'>°</span>";
    xWeatherImg.setAttribute('src', imgurl);
    xWeatherDesc.innerHTML = response.weather[0].main;
    xHumidity.innerHTML = "Humidity: " + response.main.humidity + "<span class='accent'>%</span>";
    xName.innerHTML = info;
}
//function used to capitalize country code value
function caps() {
    return ccode.value = ccode.value.toUpperCase();
}

//selection of dom elememts required for functioning
let pin = document.getElementById('pincode');
let ccode = document.getElementById('code');
let xTemp = document.getElementById('actual');
let xTempFeels = document.getElementById('feels');
let xWeatherImg = document.getElementById('weather-img');
let xWeatherDesc = document.getElementById('weather-desc');
let xHumidity = document.getElementById('humidity');
let xName = document.getElementById('name');
let bt = document.getElementById('btn');

//on event actions
ccode.onkeyup = caps;
bt.addEventListener('click', print);


