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
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("day1").innerHTML = days[d.getDay()];
document.getElementById("day2").innerHTML = days[d.getDay()+1];
document.getElementById("day3").innerHTML = days[d.getDay()+2];
document.getElementById("day4").innerHTML = days[d.getDay()+3];
document.getElementById("day5").innerHTML = days[d.getDay()+4];

