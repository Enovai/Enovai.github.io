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

function fadeOut(){
  const effect= document.getElementById('effect');
  effect.style.opacity='0';
}
