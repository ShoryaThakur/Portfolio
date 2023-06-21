var typed = new Typed("#element", {
  strings: ["Front-end Developer.", "YouTuber.", "Video Editor."],
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
