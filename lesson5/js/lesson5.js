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
    
  
  

  
  
  
