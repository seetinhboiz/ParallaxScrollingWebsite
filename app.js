let listBg = document.querySelectorAll(".banner .bg");
let titleBanner = document.querySelector(".banner h1");
let listTab = document.querySelectorAll(".tab");

window.addEventListener("scroll", (event) => {
  // scrollY is the website position (pixels) from the top
  let scrollY = window.scrollY;

  /*
    index is the index of the background image (0, 1, 2, ..., 8)
    when website is scrolled down, the background image will move up
    the bigger the index, the faster the image will move
    */
  listBg.forEach((bg, index) => {
    if (index != 0 && index != 8) {
      bg.style.transform = `translateY(${scrollY * (index / 2)}px)`;
    } else if (index == 0) {
      bg.style.transform = `translateY(${scrollY / 3}px)`;
    }
  });

  titleBanner.style.transform = `translateY(${(scrollY * 4) / 2}px)`;

  listTab.forEach((tab) => {
    if (tab.offsetTop - scrollY < 500) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
});
