function button1Clicked(){
  document.getElementById('button-1').classList.toggle('was-clicked');
}
function windowLoaded(){
  console.log('loaded ok!');
  document.getElementById('button-1').addEventListener('click',button1Clicked);
}
function changeColor(color){
  var clicked=document.getElementById('Change');
  clicked.style.color=color;
}
window.onload=windowLoaded;

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
