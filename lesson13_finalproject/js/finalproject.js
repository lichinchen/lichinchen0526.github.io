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
  
  
  /*-----web font-----*/
  WebFont.load({google: {families: ['Lato', 'Suez One', ]}});



  /*------------------closeable alert----------------------*/
  
var closeBtn = document.getElementsByClassName("fa");
var i;

for (i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
