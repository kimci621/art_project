import {
  getData
} from "./services/requests";

const moreBtn = (selectorBtn, selectorElements) => {
  let whatClick = document.querySelector(selectorBtn);
  let parentSelector = document.querySelector(selectorElements);

  whatClick.addEventListener('click', function () {
    getData('assets/db.json')
      .then(res => createElems(res.styles))
      .catch(err => alert(`Ошибка сервера, причина: ${err}`));

    this.remove();
  });

  function createElems(res) {
    res.forEach((item) => {
      let card = document.createElement('div');
      card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInDown');
      card.innerHTML = 
      `<div class="styles-block">
          <img src=${item.src} alt>
          <h4>${item.title}</h4>
          <a href=${item.link}>Подробнее</a>
       </div>`;

       parentSelector.appendChild(card);
    });
  }
};

export default moreBtn;