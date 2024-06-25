// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// Scrollbar JS
const warper = document.querySelectorAll(".coming-card-warper");

for (let item of warper) {
  item.addEventListener("wheel", function (evt) {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
    item.style.scrollBehavior = "auto";
  });
}

// Responsive Design
const barsIcon = document.getElementById("bar");
const closeIcon = document.getElementById("close");
const navContent = document.getElementById("nav-content");

if (barsIcon) {
  barsIcon.addEventListener("click", function () {
    navContent.classList.add("active");
    barsIcon.style.display = "none";
    closeIcon.style.display = "block";
  });
}

if (closeIcon) {
  closeIcon.addEventListener("click", function () {
    navContent.classList.remove("active");
    closeIcon.style.display = "none";
    barsIcon.style.display = "block";
  });
}
