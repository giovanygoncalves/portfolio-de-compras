function abrirLinks() {
  var links = document.getElementsByClassName("abrir");
  for (var i = 0; i < links.length; i++) {
    window.open(links[i].href);
  }
}

$('.row').masonry({
  percentPosition: true
});
