'use strict';

const changeClub = () => {

  const selectClubUlElem = document.querySelector('.clubs-list ul '),
    bodylElem = document.querySelector('body');

  selectClubUlElem.style.display = 'none';
  selectClubUlElem.style.zIndex = '1010';
  bodylElem.addEventListener('click', (event) => {
    let target = event.target;
    if (target.matches('.clubs-list > p') && selectClubUlElem.style.display === 'none') {
      selectClubUlElem.style.display = 'block';
    } else if (target.closest('.club-select')) {
      selectClubUlElem.style.display = 'block';
    } else if (target.closest('.club-select') === null) {
      selectClubUlElem.style.display = 'none';
    } else {
      selectClubUlElem.style.display = 'none';
    }

  });
};

export default changeClub;