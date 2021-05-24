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
