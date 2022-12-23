let mainTitle = document.getElementById("title");
let subTitle = document.getElementById("sub-title");

let value = "";

window.addEventListener("scroll", function () {
  value = window.scrollY;
  if (value > 280) {
    mainTitle.style.animation = "disappear 2s ease-out forwards";
    subTitle.style.animation = "disappear 2s ease-out forwards";
  } else {
    mainTitle.style.animation = "slide 2s ease-out";
    subTitle.style.animation = "slide 2s ease-out";
  }
});
