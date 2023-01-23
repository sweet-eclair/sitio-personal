$.ajax({
  url: "/sitio-personal/scripts/navbar.html",
  context: $("header")[0]
}).done(function (data) {
  $(this).html(data);
});
