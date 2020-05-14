'use strict';

const arrow = () => {
    const totop = document.querySelector('#totop');
    totop.style.display = 'none';

    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= 700) {
            totop.style.display = 'block';
        } else {
            totop.style.display = 'none';
        }
    });
};
export default arrow;