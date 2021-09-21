//Функция с async/await для 'POST' fetch запроса
const PostData = async (serverURL, dataOut) => {
  const response = await fetch(serverURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: dataOut
  });
  return await response.json();
};
//Функция с async/await для 'GET' fetch запроса
const getData = async (serverURL) => {
  const response = await fetch(serverURL);
  if (!response.ok) {
    // new Error(текст); вывод ошибки с текстом 
    throw new Error(`Could not fetch ${serverURL}, status ${response.status}`);
    // throw - вывод, выпадание, отображение
  }
  return await response.json();
};

  
  // function bindPostData(form) {
  //   form.addEventListener('submit', (e) => {
  //     e.preventDefault();
  //     //Сообщение для пользователя о статусе
  //     let statusMessage = document.createElement('img');
  //     statusMessage.src = messages.loading;
  //     statusMessage.style.cssText = `
  //   display: block;
  //   margin: 0 auto;
  //   `;
  //     form.insertAdjacentElement('afterend', statusMessage);
  //     // Запрос
  //     /*
  //     Объекты FormData позволяют вам легко конструировать наборы пар ключ-значение, 
  //     которые в дальнейшем можно отправить с помощью метода send().
  //     */
  //     const formData = new FormData(form);
  //     //Каждая formData->obj->formJSON->array->obj->JSON
  //     const formJSON = JSON.stringify(Object.fromEntries(formData.entries()));
  //     //formData() в JSON методом forEach
  //     // let PersonalInfo = {};
  //     // formData.forEach(function (value, key) {
  //     //   PersonalInfo[key] = value;
  //     // });
  //     // Запрос
  //     PostData('http://localhost:3000/requests', formJSON)
  //       .then(resolve => {
  //         console.log('POST ok');
  //         //модальное окно с успехом
  //         SuccesModal(messages.success);
  //         statusMessage.remove();
  //       }).catch(() => {
  //         statusMessage.textContent = messages.error;
  //         form.append(statusMessage);
  //       }).finally(() => {
  //         form.reset();
  //       });
  //   });
  // }
  
  // //модальное окно с успехом
  // function SuccesModal(message) {
  //   document.querySelector('.modal__content').classList.add('hide');
  //   //Родитель модального окна .modal
  //   // openModal();
  
  //   let newModal = document.createElement('div');
  //   newModal.classList.add('modal__content');
  //   newModal.innerHTML = `<div class="modal__title">${message}</div>`;
  //   document.querySelector('.modal__dialog').append(newModal);
  //   setTimeout(() => {
  //     newModal.remove();
  //     // closeModal(modalContent);
  //     document.querySelector('.modal__content').classList.remove('hide');
  //   }, 3000);
  // }
  // // POST forms
  // const forms = document.querySelectorAll('form');
  
  // //перебор всех форм в документе
  // forms.forEach((item) => {
  //   bindPostData(item);
  // });