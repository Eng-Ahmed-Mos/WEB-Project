function initMap() {
    // The location of Cairo
    var cairo = {lat: 30.044420, lng: 31.235712};
    // The map, centered at Cairo
    var map = new google.maps.Map(
        document.querySelector(".map"), {zoom: 4, center: cairo});
    // The marker, positioned at Cairo
    var marker = new google.maps.Marker({position: cairo, map: map});
  }
  
  
  // Smooth scrolling
  $("#navbar a, .btn").on("click", function(event) {
  
    if(this.hash !== "") {
      event.preventDefault();
  
      const hash = this.hash;
  
      $("html, body").animate({scrollTop: $(hash).offset().top - 100}, 800);
    }
  });
  
  
  // navbar Opacity
  
  window.addEventListener("scroll", function() {
    if(window.scrollY > 150) {
      document.querySelector("#navbar").style.opacity = 0.9;
    } else {
      document.querySelector("#navbar").style.opacity = 1;
    }
  });
  let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');



menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();


function validation(){
  // store the value that user enter in variables
  var user = document.getElementById('user').value;
  var user2 =  document.getElementById('user2').value;
  var pass = document.getElementById('pass').value;
  var conpass = document.getElementById('conpass').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;
  
  var myform = document.getElementById('myform');
   // to check if that field empty or not
  
 
 //  to accert a name of 3 letters at least
  if(user.length<3){
      alert("*first Name must be more than 2 letters*");
      return false;
  }
  if(user2.length<3){
    alert("*last Name must be more than 2 letters*");
    return false;
}
  
  
  
  if(pass.search(/[ ]/)!=-1){
     alert("**must not include a space**");
  return false;
 }
  // limit the lenght of the  pass
  if(pass.length != 8 ){
    alert("**please write a passward of 8 no long no less**");
      return false;
  }
    // must enclud numbers
 if(pass.search(/[0-9]/)==-1){
      
      alert("must incluce at least a number");
      return false;
  }
  //not to accept without upper characters
  if(pass.search(/[A-Z]/)==-1){
alert("**must include at leasrt 1 upper character**");
      return false;
  }
  // not to accept without lower characters
 if(pass.search(/[a-z]/)==-1){
      alert("**must include at least 1 lowwer character**");
  return false;
 }
  // not accept without special characters
  if(pass.search(/[!\@\#\$\%\^\&\*\(\)\_\-\=\+\<\>\,\?]/)==-1){
     
         alert("**must include 1 special character**");
      return false;
     }
  
  if(conpass != pass){
      alert("**passward isnot matches");
      return false;
  
  }
 
    if(email.indexOf("@") == -1 || email.length < 6){
    alert("**Please Enter valid Email**");
     return false;
}


  
}