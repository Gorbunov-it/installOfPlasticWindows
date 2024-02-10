const helpers = () => {
  console.log("helpers...");
};

const slider = (block, left, right) => {
  console.log("slider...");
};

const status = (message) => {
  console.log("status...");
};

const scrollBy = (element, top = 0) => {
  window.scroll({
    top: element.offsetTop - top,
    behavior: "smooth",
  });
};

export { helpers, slider, status, scrollBy };
