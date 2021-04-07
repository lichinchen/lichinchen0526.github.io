const forecastapi = "https://api.openweathermap.org/data/2.5/forecast?id=4259418&appid=5539d42cf2d71dde5c4f1a28929669c0&units=imperial";

fetch(forecastapi)
.then((response) => response.json())
.then((jsObject) => {
  

let forecastapi = jsObject.list.filter(data => data.dt_txt.includes('18:00:00'));


let n = "";

let weekday = new Array(7);
      weekday[0] = "Sun.";
      weekday[1] = "Mon.";
      weekday[2] = "Tue.";
      weekday[3] = "Wed.";
      weekday[4] = "Thu.";
      weekday[5] = "Fri.";
      weekday[6] = "Sat.";
var month = new Array();
      month[0] = "1";
      month[1] = "2";
      month[2] = "3";
      month[3] = "4";
      month[4] = "5";
      month[5] = "6";
      month[6] = "7";
      month[7] = "8";
      month[8] = "9";
      month[9] = "10";
      month[10] = "11";
      month[11] = "12";


forecastapi.forEach(data => {
  let d = new Date(data.dt_txt); 
  let weather = data.weather[0].description;
  let imageURL = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
         
document.getElementById(`day${n+1}`).textContent =weekday[d.getDay()];
document.getElementById(`date${n+1}`).textContent = month[d.getMonth()]+"/"+d.getDate();
document.getElementById(`temp${n+1}`).textContent = data.main.temp.toFixed(0) + `°F`;
document.getElementById(`icon${n+1}`).setAttribute('src', imageURL);
document.getElementById(`icon${n+1}`).setAttribute('alt', weather);
n++;
}) 
});


const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4259418&appid=5539d42cf2d71dde5c4f1a28929669c0&units=imperial";



fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
       
        document.getElementById('curCon').textContent = jsObject.weather[0].main;
        document.getElementById('curTemp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
       
    
});
      






