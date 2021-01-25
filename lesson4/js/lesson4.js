// Hamburger Button
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


function toggleMenuRemove(){
  document.getElementsByClassName("navigation")[0].classList.remove("responsive");
}

//Current date
const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('currentday').textContent = new Date().toLocaleDateString('en-US', options);



