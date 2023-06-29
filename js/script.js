var typed = new Typed("#element", {
  strings: ["Front-end Developer.", "YouTuber.", "Video Editor."],
  typeSpeed: 70,
  loop: true,
});
function refresh() {
  location.reload();
}
// $(function () {
  $(".fa-navicon").click(function () {
    $(".right ul").slideToggle();
  });
  // );
  // }
