import { scrollBy } from "./helpers";

const up = () => {
  const buttonUp = document.querySelector(".smooth-scroll");
  const header = document.getElementById("header");
  const benefits = document.getElementById("benefits");

  buttonUp.addEventListener("click", (e) => {
    e.preventDefault();
    scrollBy(header);
  });

  const scrollUp = () => {
    window.scrollY >= benefits.offsetTop - 100 ? showScrollUp() : hideScrollUp();
  };

  const showScrollUp = () => {
    buttonUp.style.display = "block";
  };

  const hideScrollUp = () => {
    buttonUp.style.display = "none";
  };

  window.onscroll = scrollUp;

  const init = () => {
    scrollUp();
  };

  init();
};

export default up;
