import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const slider = () => {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 2,
    navigation: {
      nextEl: ".services__arrow--right",
      prevEl: ".services__arrow--left",
    },
  });
};

export default slider;
