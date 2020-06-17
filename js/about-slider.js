const images = document.querySelectorAll(".about__picture");
//прокрутка картинок на 1 позицию
function scrollImg(imgArray) {
  for (let i = 0; i < imgArray.length; i++) {
    let imgIndex = imgArray[i].getAttribute("data-index");
    if (imgIndex == 0) {
      imgArray[i].setAttribute("data-index", imgArray.length - 1);
    } else {
      imgArray[i].setAttribute("data-index", imgIndex - 1);
    }
  }
}
function getDotIndex() {
  return document.querySelector(".about__picture[data-index = '0']").getAttribute("data-dot");
}

function setImg(dot) {
  let dotIndex = dot.getAttribute("data-index");

  while (dotIndex != getDotIndex()) {
    scrollImg(images);
  }
}
document.querySelectorAll(".about__dot").forEach(function (dot) {
  dot.addEventListener("click", function (event) {
    setImg(event.target);
    offDot();
    event.target.classList.toggle("active");
  });
});
document.querySelector(".about__arrow").addEventListener("click", function () {
  scrollImg(images);
  offDot();
  document.querySelector(`.about__dot[data-index = "${getDotIndex()}"]`).classList.toggle("active");
});
function offDot() {
  document.querySelector(".about__dot.active").classList.toggle("active");
}
