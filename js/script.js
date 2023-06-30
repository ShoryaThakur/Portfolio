var typed = new Typed("#element", {
  strings: ["Front-end Developer.", "YouTuber.", "Video Editor."],
  typeSpeed: 70,
  loop: true,
});
function refresh() {
  location.reload();
}

$(".fa-navicon").click(function () {
  $(".right ul").slideToggle();
});


//How To Make a Sticky Navbar which changes color after scrolling 

// let headerEL = document.querySelector("header");
// window.addEventListener("scroll", () => {
//   console.log("MY");
//   if (window.scrollY > 10) {
//     headerEL.classList.add("active");
//     headerEL.style.width = "105px";
//   }
//   else{
//     headerEL.classList.remove("active");
//     headerEL.style.width = "100%";
//   }
// });
