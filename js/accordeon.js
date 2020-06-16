const headers = document.querySelectorAll("[data-name]");
const texts = document.querySelectorAll(".feature__item-text");
const dots = document.querySelectorAll(".feature__accordeon-dot");

// headers.forEach(function (item) {
//   item.addEventListener("click", function () {
//     dots.forEach(function (item) {
//       item.classList.remove("active");
//     });
//     texts.forEach(function (item) {
//       item.classList.add("hidden");
//     });
//     let content = this.nextElementSibling;
//     content.classList.remove("hidden");

//     let dot = this.previousElementSibling;
//     console.log(dot);
//     dot.classList.add("active");
//   });
// });

headers.forEach(function (item) {
  item.addEventListener("click", function () {
    clickFunction(this);
  });
});

function clickFunction(e) {
  texts.forEach(function (item) {
    item.classList.add("hidden");
  });
  dots.forEach(function (item) {
    item.classList.remove("active");
  });
  e.nextElementSibling.classList.remove("hidden");
  e.previousElementSibling.classList.add("active");
}
