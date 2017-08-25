function activate(id){
  var links = document.getElementsByClassName('courses_link');
  var cards = document.getElementsByClassName('courses_card');
  for(var i = 0; i < links.length; i++){
    links[i].classList.remove("active_link");
    cards[i].classList.remove("active");
  }
  document.getElementById("courses_" + id + "_link").classList.add("active_link");
  document.getElementById("courses_" + id).classList.add("active");
};
