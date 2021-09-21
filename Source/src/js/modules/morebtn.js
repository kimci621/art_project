const moreBtn = (selectorBtn, selectorElements) => {
  let whatClick = document.querySelector(selectorBtn);
  let hideElements = document.querySelectorAll(selectorElements);

  whatClick.addEventListener('click', () => {
    hideElements.forEach(item => {
      item.classList.add('animated', 'fadeInDown');
      item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
      item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    });

    whatClick.style.display = 'none';
  });
};

export default moreBtn;