var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
// animated moving text

// form validation
const allForm = document.querySelectorAll(".form textarea, .form input");

for (let form of allForm) {
  form.addEventListener("input", function () {
    this.classList.add("valid");
    this.classList.remove("invalid");
    if (this.checkValidity()) {
    } else {
      this.classList.add("invalid");
      this.classList.remove("valid");
    }

    if (this.value == "") {
      this.classList.remove("valid");
      this.classList.remove("invalid");
    }
  });
}

// hamburger animation
const menu = document.querySelector(".menu");
const menuBar = document.querySelector(".menubar");

menu.addEventListener("click", () => {
  menuBar.classList.toggle("check");
});


 /*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction(){
    // const navMenu = document.getElementById('menubar')
    // When we click on each nav__link, we remove the show-menu class
    // navMenu.classList.remove('clean')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))