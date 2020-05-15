'use strict';

import slider from './modules/slider';
import carousel from './modules/carousel';
import blockAndShowMenu from './modules/blockAndShowMenu';
import arrow from './modules/arrow';
import changeClub from './modules/changeClub';
import gift from './modules/gift';

gift();
changeClub();
// появление стрелки
arrow();
//фиксация и отображение меню в мобильной версии
blockAndShowMenu();
// гланвый слайдер 
slider('.main-slider', '.slide', true, false, 1, 3000);
slider('.gallery-bg', '.slide', true, true, 1, 3000);
// карусель-слайдер
carousel('.services-slider', '.slide', true, 5, 2000);
