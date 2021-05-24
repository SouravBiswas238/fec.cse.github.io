
$("#nav__menu").mousedown(function (e) {
  e.preventDefault();
});
let focused = false;
$("#nav__btn").click(function () {
  if (focused) {
    $("#nav__btn").blur();
    focused = false;
  } else {
    focused = true;
  }
});
$("#nav__btn").focusout(function () {
  focused = false;
});

// For scroll top button

$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop()>200){
      $('#scrollTop').fadeIn();
    }
    else{
      $('#scrollTop').fadeOut();
    }
  });
  $('#scrollTop').click(function(){
    $('html, body').animate({
      scrollTop:0
    }, 1000);
  });

});