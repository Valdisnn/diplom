'use strict';

const sendForm = () => {

  const errorMessage = 'Что-то пошло не так 🤕',
    successMessage = 'Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время 🙂',
    thanksModal = document.getElementById('thanks'),
    formContent = thanksModal.querySelector('.form-content'),
    formContentText = formContent.querySelector('p'),
    freeVisitPopup = document.getElementById('free_visit_form'),
    callbackPopup = document.getElementById('callback_form');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem; color: white;';

  const checkAlert = () => {

    //alert('Поставьте галочку, что вы согласны на обработку персональных данных');
  };

  const postData = (body) => {

    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };


  const form = document.querySelectorAll('form');

  form.forEach(item => {
    item.addEventListener('submit', event => {

      const checkInput = item.querySelector('input[type="checkbox"]');
      let target = event.target;
      event.preventDefault();

      let allInputs = target.querySelectorAll('input[class="not-empty"]');

      for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value === '') {
          //alert('Заполните все поля в форме!');
          return;
        }
      }

      if (checkInput) {
        if (!checkInput.checked) {
          checkAlert();
          return;
        }
      }

      const formData = new FormData(event.target);
      const body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });

      thanksModal.addEventListener('click', (event) => {

        let target = event.target;
        if (target.classList.contains('close_icon') || target.matches('button')) {
          thanksModal.style.display = 'none';
        } else {
          target = target.closest('.form-wrapper');
          if (!target) {
            thanksModal.style.display = 'none';
          }
        }
      });

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200');
          }
          target.reset();
          thanksModal.style.display = 'block';
          formContentText.textContent = successMessage;
          setTimeout(() => {
            thanksModal.style.display = 'none';
          }, 3000);
          setTimeout(() => {
            freeVisitPopup.style.display = 'none';
          }, 0);
          setTimeout(() => {
            callbackPopup.style.display = 'none';
          }, 0);
        })
        .catch((error) => {
          target.reset();
          thanksModal.style.display = 'block';
          formContentText.textContent = errorMessage;
          console.error(error);
          setTimeout(() => {
            freeVisitPopup.style.display = 'none';
          }, 0);
          setTimeout(() => {
            callbackPopup.style.display = 'none';
          }, 0);
        });
    });
  });
};

export default sendForm;
