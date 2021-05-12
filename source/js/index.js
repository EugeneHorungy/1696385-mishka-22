ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      // center: [59.93863506417266,30.323117499999945],
      // center: [59.938584,30.322947],
      center: [59.93873506417266,30.323117499999945],
      zoom: 17
  }, {
      searchControlProvider: 'yandex#search'
  }),

  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Мишка',
  }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/logo/mishka-marker.svg',
      iconImageSize: [67, 100],
      iconImageOffset: [-21, -83]
  });

  myMap.geoObjects
      .add(myPlacemark)
});
