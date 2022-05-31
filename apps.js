const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navigation-links");

hamburger.addEventListener("click", () => {
  if (navlinks.style.transform === "scaleY(1)") {
    navlinks.style.transform = "scaleY(0)";
  } else {
    navlinks.style.transform = "scaleY(1)";
  }
});
