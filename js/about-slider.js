
document.querySelector(".about__slider").addEventListener("click", function () {
    var children = this.querySelectorAll(".about__picture");
  

    for (var i = 0; i < children.length; i++) {
      var pictureIndex = children[i].getAttribute("data-index");
      if (pictureIndex == 0) {
        children[i].setAttribute("data-index", children.length - 1);
      } else {
        children[i].setAttribute("data-index", pictureIndex - 1);
      }
    }
  });
  