function flip (){
  console.log("button-clicked");
  var front = document.getElementById('intro-button');
  console.log(front);
  front.classList.toggle("flip-style");
  var flipper = document.getElementById('flipper');
  console.log(flipper);
  flipper.classList.toggle("flipped");
}

function load(){
  var eg = document.getElementById('email-grab');
  console.log("we loaded");
  eg.classList.toggle("loaded");
}
