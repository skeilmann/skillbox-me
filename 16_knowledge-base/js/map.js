// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map(
    "myMap1",
    {
      center: [48.83352227536214, 2.4143637826376665],
      zoom: 14,
      controls: [] /* Убираем элементы управления*/,
    },
    {
      suppressMapOpenBlock: true /* Убираем элементы управления*/,
    }
  );

  myMap.behaviors.disable("scrollZoom");

  // Создание геообъекта с типом точка (метка).
  var myPlacemark = new ymaps.Placemark(
    [48.83352227536214, 2.4143637826376665],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/location-sign.png",
      iconImageSize: [48, 48],
      iconImageOffset: [-3, -42],
    }
  );

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}
