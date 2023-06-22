var typed = new Typed("#element", {
  strings: ["Video Editor.", "YouTuber.", "Front-end Developer."],
  typeSpeed: 50,
});
function refresh() {
  location.reload();
}
$(function () {
  $(".fa-navicon").click(function () {
    $(".right ul").slideToggle();
  });
});
