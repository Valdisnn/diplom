'use strict';

const slider = () => {

  const slider = document.querySelector('.main-slider'),
        slides = slider.querySelectorAll('.slide');

  let currentSlide = 0,
    interval;

  const prev = (elem, index, strClass) => {

    elem[index].classList.remove(strClass);
  };

  const next = (elem, index, strClass) => {

    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {

    prev(slides, currentSlide, 'slide-active');
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    next(slides, currentSlide, 'slide-active');
  };

  const start = (time = 3000) => {

    interval = setInterval(autoPlaySlide, time);
  };

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  start(3000);
};

export default slider;