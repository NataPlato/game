// Находим все dropdown-select__visible на странице
const selectAllElements = document.querySelectorAll(".dropdown-select__visible");

// Пробегаем по всем dropdown-select__visible на странице
selectAllElements.forEach(function (item) {
  //Для каждого dropdown-select__visible привязываем событие по клику
  item.addEventListener("click", function () {
    // Находим объект select рядом с тем dropdown-select__visible,
    //на котором кликнули, чтобы потом поместить в него выбранное значение
    const realSelect = this.nextElementSibling;
    // Проверяем: кликнули по пунктам в выпадашке?
    if (event.target.hasAttribute("data-select-item")) {
      //Если кликнули на пункте выпадашки, то:

      //сохраняем текст из этого выбранного пункта, убирая лишние пробелы
      //с помощью регулярных выражений
      var selected = event.target.textContent.replace(/\s+/g, "");
      //сохраняем элемент dropdown-select__title
      var titleElem = this.querySelector(".dropdown-select__title");
      //сохраняем текст из элемента dropdown-select__title
      var titleText = titleElem.textContent.replace(/\s+/g, "");
      //меняем текст в dropdown-select__title на текст выбранного пункта
      titleElem.textContent = event.target.textContent;
      //В случае, если в dropdown-select__title был текст, которого нет
      //в пунктах выпадашки, необходимо его вставить вместо выбранного пункта.
      //Для этого сперва создаем массив пунктов, присутствующих в текущей
      //выпадашке
      var options = [];
      this.querySelectorAll(".dropdown-select__item").forEach(function (el) {
        //также удаляем лишние пробелы из извлекаемого текста
        options.push(el.textContent.replace(/\s+/g, ""));
      });
      //проверяем, есть ли в списке пунктов старый текст
      //из dropdown-select__title
      if (!options.includes(titleText)) {
        //если этого текста там нет, - вставляем его в выбранный пункт,
        //заменяя текущий
        event.target.textContent = titleText;
      }

      //Связка с реальным селектом
      //Изменяем значение value  у реального селекта
      if (realSelect) {
        realSelect.value = selected;
      }
    }
    //Скрываем/показываем дропдаун:
    //сперва находим и сохраняем в перемнную список классов выпадашки
    var currentSelectDropdownClassList = this.querySelector(".dropdown-select__dropdown").classList;
    //переключаем класс hidden
    currentSelectDropdownClassList.toggle("hidden");

    //Так как событие, отслеживает клик только на самой выпадашке, если ничего не выбрано,
    //выпадашка остается открытой. Закроем ее принудительно по таймеру
    setTimeout(function () {
      if (!Array.from(currentSelectDropdownClassList).includes("hidden")) {
        currentSelectDropdownClassList.add("hidden");
      }
    }, 3000);
  });
});

// //Нашли контейнер с селектом
// const selectAllElements = document.querySelectorAll("[data-select]");
// console.log(selectAllElements);

// selectAllElements.forEach(function (item) {
//   item.addEventListener("click", function () {
//     const realSelect = this.nextElementSibling;
//     console.log(realSelect);
//     //Если кликнули по понктам в дропдауне
//     if (event.target.hasAttribute("data-select-item")) {
//       //Нашли заголовок у данного дропдауна и записали в его текстовое наполнение значения из дата атрибута
//       var itemTitle = event.target.getAttribute("data-select-item");

//       this.querySelector(
//         "[data-select-title]"
//       ).textContent =  itemTitle;

//       //Скрываем дропдаун
//       this.querySelector(".dropdown-select__dropdown").classList.toggle("hidden");

//       //Связка с реальным селектом
//       //Изменяем значение value  у реального селекта
//       if (realSelect) {
//       realSelect.value = itemTitle;
//       }
//     } else {
//       //Если кликнули по заголовку
//       //Скрываем или открываем дропдаун
//       this.querySelector(".dropdown-select__dropdown").classList.toggle("hidden");
//     }
//   });
// });

