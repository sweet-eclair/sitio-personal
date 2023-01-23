/*(function () {
let x = new XMLHttpRequest();
x.onreadystatechange = function () {
  if (this.readyState == 4) {
    if (this.status == 200) {
      document.getElementsByTagName("header")[0].innerHTML = this.responseText;
    }
    if (this.status == 404) {
      document.getElementsByTagName("header")[0].innerText =
        "Navbar failed to load";
    }
  }
};
x.open("GET", "/sitio-personal/scripts/navbar.html", true);
x.send();
})()*/

$.ajax({
  url: "/sitio-personal/scripts/navbar.html",
  context: $("header")[0]
}).done(function (data) {
  $(this).html(data);
});
