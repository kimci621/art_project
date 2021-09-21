import {postData} from "./services/requests";

function dataFromForms() {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const inputJpgName = document.querySelectorAll('[name=upload]');

  const messages = {
    fail: 'assets/img/fail.png',
    ok: 'assets/img/ok.png',
    spinner: 'assets/img/spinner.gif',
    loadingText: 'Загрузка...',
    successText: 'Спасибо! Скоро мы с вами свяжемся!',
    failureText: 'Что-то пошло не так...'
  };

  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = "";
    });
    inputJpgName.forEach(input => {
      input.value = "";
    });
  };

  inputJpgName.forEach(item => {
    item.addEventListener('input', () => {
      let itemName = item.files[0].name;
      item.previousElementSibling.textContent = `${itemName}`;
    });
  });

  //listener submit on every form
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.parentNode.appendChild(statusMessage);

      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        form.style.display = 'none';
      }, 400);

      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', messages.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);
      let statusText = document.createElement('div');
      statusText.textContent = `${messages.loadingText}`;
      statusMessage.appendChild(statusText);

      const inputValue = new FormData(form);

      postData('assets/server.php', inputValue)
        .then(res => {
          console.log(res);
          statusImg.setAttribute('src', messages.ok);
          statusText.textContent = `${messages.successText}`;
        })
        .catch(() => {
          statusImg.setAttribute('src', messages.fail);
          statusText.textContent = `${messages.failureText}`;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            form.style.display = 'block';
            form.classList.remove('fadeOutUp');
            form.classList.add('fadeInUp');
          }, 4000);
        });

    });
  });

}

export default dataFromForms;