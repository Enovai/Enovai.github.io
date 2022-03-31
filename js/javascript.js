function button1Clicked(){
  document.getElementById('button-1').classList.toggle('was-clicked');
}
function windowLoaded(){
  console.log('loaded ok!');
  document.getElementById('button-1').addEventListener('click',button1Clicked);
}
window.onload=windowLoaded;
