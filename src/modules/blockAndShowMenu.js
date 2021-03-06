'use strict';

const blockAndShowMenu = () => {
    const paretBlock = document.querySelector('.top-menu'),
        headerMain = document.querySelector('.header-main'),
        popupMune = document.querySelector('.popup-menu'),
        gift = document.querySelector('.fixed-gift');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 200 && document.documentElement.clientWidth <= 767) {
            paretBlock.style.cssText = `
    position: fixed;
    z-index: 100;
    top: 0`;
            if (!!gift) {
                gift.style.right = '0px';
                gift.style.top = '63px';
            }
        } else {
            paretBlock.style.position = 'initial';
            if (!!gift) {
                gift.style.right = '20px';
                gift.style.top = '15px';
            }
        }
    });
    headerMain.addEventListener('click', event => {
        let target = event.target;
        if (target.closest('.menu-button')) {
            popupMune.style.display = 'flex';
        } else if (target.matches('a')) {
            popupMune.style.display = 'none';
        } else if (target.closest('.close-menu-btn')) {
            popupMune.style.display = 'none';
        }
    });
};
export default blockAndShowMenu;