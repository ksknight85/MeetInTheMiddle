

const side1 = document.getElementsByClassName('side-1');
const side2 = document.getElementsByClassName('side-2');
const signInF = document.getElementsByClassName('sign-in fieldset');
const signUpF = document.getElementsByClassName('sign-up fieldset');
document.getElementsByClassName('side-1 toggle-log').addEventListener("click", function (event) {
  side1.css({ 'transform': 'rotateY(180deg)', 'background-position': '100%' });
  side2.css({ 'transform': 'rotateY(0deg)', 'background-position': '100%' });
  signInF.attr('disabled', 'disable');
  signInF.addClass('block');
  signUpF.removeAttr('disabled');
  signUpF.removeClass('block');
});
document.getElementsByClassName('side-2 toggle-log').addEventListener("click", function (event) {
  side1.css({ 'transform': 'rotateY(0deg)', 'background-position': '0%' });
  side2.css({ 'transform': 'rotateY(-180deg)', 'background-position': ' 0%' });
  signInF.removeAttr('disabled');
  signInF.removeClass('block');
  signUpF.attr('disabled', 'disable');
  signUpF.addClass('block');
});