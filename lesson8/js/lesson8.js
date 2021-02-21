/*----- Hamburger Button------*/
function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


function toggleMenuRemove(){
document.getElementsByClassName("navigation")[0].classList.remove("responsive");
}

/*-----current year-----*/
let y = new Date();
document.getElementById("currentYear").innerHTML = y.getFullYear();
/*-----Current date-----*/
const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('currentday').textContent = new Date().toLocaleDateString('en-US', options);

/*-----banner-----*/
let date = new Date();
date.getDay()
if (date.getDay()==5){
  document.querySelector(".onlyFri").style.display="block" 
}

/*-----Current weekday-----*/
var d = new Date();
var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

for (i = 0; i < 29; i++) {
  document.getElementById("day1").innerHTML = weekday[(d.getDay()+1 + i) % 7];
  document.getElementById("day2").innerHTML = weekday[(d.getDay()+2 + i) % 7];
  document.getElementById("day3").innerHTML = weekday[(d.getDay()+3 + i) % 7];
  document.getElementById("day4").innerHTML = weekday[(d.getDay()+4 + i) % 7];
  document.getElementById("day5").innerHTML = weekday[(d.getDay()+5 + i) % 7];

}
  


/*-----WindChill-----*/
window.onload = function windChill() {
let t = parseFloat(document.getElementById('curTemp').textContent);
let s = parseFloat(document.getElementById('windSpeed').textContent); 
let output = "N/A";
if (t<= 50 && s>=3){
let f = (35.74 + (0.6215*t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275*(t*(Math.pow(s , 0.16))));
output = Math.round(f);
}
document.getElementById("windChill").innerHTML = output;
}

/*-----lazyload-----*/
let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {image.removeAttribute('data-src');};
};

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

