function Get(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    return xhr.responseText;
}
function print() {
    let pin = document.getElementById('pincode').value;
    let ccode = document.getElementById('code').value;
    if (pin === "" || ccode === "") {
        alert("Input Both Pincode & Country Code");
        return;
    }
    let url = "https://api.openweathermap.org/data/2.5/weather?zip=" + pin + "," + ccode + "&APPID=710b59cc56adbbf39097008782d7c12d&units=metric";
    const response = JSON.parse(Get(url));
    console.log(response);

    let info = response.name + " / " + response.sys.country;
    let a = response.weather[0].icon;
    let imgurl = "http://openweathermap.org/img/wn/" + a + "@2x.png";
    xTemp.innerHTML = Math.floor(response.main.temp) + "°C";
    xWeatherImg.setAttribute('src', imgurl);
    xWeatherDesc.innerHTML = response.weather[0].main;
    xHumidity.innerHTML = "Humidity: " + response.main.humidity + "%";
    xName.innerHTML = info;
}

let xTemp = document.getElementById('temp');
// let xWeather = document.getElementById('weather');
let xWeatherImg = document.getElementById('weather-img');
let xWeatherDesc = document.getElementById('weather-desc');
let xHumidity = document.getElementById('humidity');
let xName = document.getElementById('name');
let bt = document.getElementById('btn');

// console.log(xWeather.nextSibling);
bt.addEventListener('click', print);


