'use strict';

import slider from './modules/slider';
import carousel from './modules/carousel';
import blockAndShowMenu from './modules/blockAndShowMenu';
import arrow from './modules/arrow';
import changeClub from './modules/changeClub';
import gift from './modules/gift';
import calc from './modules/calc';
import modalOne from './modules/modalOne';
import modalTwo from './modules/modalTwo';
import gallerySlider from './modules/gallerySlider';
import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';

// первое модальное окно (бесплатный визит)
modalOne();
// первое модальное окно (перезвоните мне)
modalTwo();
// функция кальулятора
calc();
// модалка с подарком
gift();
// модалка с выбором клуба
changeClub();
// появление стрелки
arrow();
// фиксация и отображение меню в мобильной версии
blockAndShowMenu();
// слайдер-фотогалерея
gallerySlider();
// масска ввода для телефона
maskPhone();
//отправка форм на сервер
sendForm();
// гланвый слайдер 
slider();
// карусель-слайдер
const sliderCarousel = new carousel({
  main: '#wrapper',
  wrap: '.services-slider',
  next: '.next',
  prev: '.prev',
  slidesToShow: 5,
  infinity: true,
  responsive: [{
      breackpoint: 1024,
      slideToShow: 3,
    },
    {
      breackpoint: 768,
      slideToShow: 2,
    },
    {
      breackpoint: 576,
      slideToShow: 1,
    },
  ]
});
sliderCarousel.init();