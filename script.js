let display = document.getElementById("display");
display.innerHTML = 0;
function pressBtn(btn) {
  let pressed = btn.value;
  let expr = display.innerHTML;
  if (pressed === '=') {
    display.innerHTML = eval(expr);
  }
  else if (pressed==="<"){
    display.innerHTML = display.innerHTML.substring(0, expr.length-1);
  }
  else if (pressed === ".") {
    if (display.innerHTML.indexOf('.') !=-1 && display.innerHTML.match(/\/|\*|\+|-/g) === null || display.innerHTML.substring(expr.length-1, expr.length) == '.') {
      display.innerHTML = display.innerHTML;
    }
    else {
      display.innerHTML = display.innerHTML + pressed;
    }
  }
  else if (pressed.match(/\/|\*|\+|-/g)){
    if (display.innerHTML.substring(expr.length-1, expr.length).match(/\/|\*|\+|-/g)){
      display.innerHTML = display.innerHTML.replace(display.innerHTML.substring(expr.length-1, expr.length).match(/\/|\*|\+|-/g), pressed);
    }
    else {
      display.innerHTML = display.innerHTML + pressed;
    }
  }
  else if (pressed === 'C') {
    display.innerHTML = '0';
  }
  else {
    if (display.innerHTML === '0') {
      display.innerHTML = pressed;
    }
    else {
    display.innerHTML = display.innerHTML+btn.value;
    }
  }

}

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
