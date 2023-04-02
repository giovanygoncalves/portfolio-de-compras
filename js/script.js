function abrirLinks() {
  var links = document.getElementsByClassName("abrir");
  for (var i = 0; i < links.length; i++) {
    window.open(links[i].href);
  }
}

var $row = $('.row').imagesLoaded(function () {
  $row.masonry({
    percentPosition: true
  });
});