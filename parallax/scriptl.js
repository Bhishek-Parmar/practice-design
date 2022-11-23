// console.log("working");
const naam = document.querySelector(".name");
const titleContainer = document.querySelectorAll(".title-container");
const title = document.querySelectorAll(".title");
window.addEventListener("scroll", () => {
  let offset = window.scrollY;
  naam.style.transform = `scale(${offset * 0.001})`;
  titleContainer[0].style.backgroundPositionY = `${offset * 0.7}px`;
  titleContainer[1].style.backgroundPositionY = `${-offset * 0.7}px`;
  title[0].style.transform = `translateX(calc(200vh - ${offset * 0.9}px))`;
  title[1].style.transform = `translateX(calc(-300vh + ${offset}px))`;
});
