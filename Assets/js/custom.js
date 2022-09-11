$(document).ready(function(){

  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
  });

	  var menuBtn = document.getElementById('menuBtn');
      var sideNav = document.getElementById('sideNav');
      var menuImg = document.getElementById('menuImg');

      menuBtn.onclick = function(){
        if (sideNav.style.right == '-250px') {
          sideNav.style.right ='0';
          menuImg.src=('Assets/img/close.png');
          menuImg.style.width ='20px';
          menuImg.style.height ='20px';
        }else{
          sideNav.style.right = '-250px';
          menuImg.src=('Assets/img/menu-1.png');
          menuImg.style.width ='60px';
          menuImg.style.height ='40px';
        }
      }


});