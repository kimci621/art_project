const tabs = () => {
  const wrapper = document.querySelector('#portfolio'),
    noPortfolio = wrapper.querySelector('.portfolio-no'),
    btnsParent = wrapper.querySelector('.portfolio-menu'),
    allBtns = btnsParent.querySelectorAll('li'),
    all = btnsParent.querySelector('.all'),
    lovers = btnsParent.querySelector('.lovers'),
    chef = btnsParent.querySelector('.chef'),
    girl = btnsParent.querySelector('.girl'),
    guy = btnsParent.querySelector('.guy'),
    grandmother = btnsParent.querySelector('.grandmother'),
    granddad = btnsParent.querySelector('.granddad'),
    contentParent = wrapper.querySelector('.portfolio-wrapper'),
    allContent = contentParent.querySelectorAll('.all'),
    girlContent = contentParent.querySelectorAll('.girl'),
    loversContent = contentParent.querySelectorAll('.lovers'),
    guyContent = contentParent.querySelectorAll('.guy'),
    chefContent = contentParent.querySelectorAll('.chef');

  btnsParent.addEventListener('click', (e) => {
    if (e.target) {
      console.log('hi');
      allBtns.forEach(item => {
        item.classList.remove('active');
        item.classList.remove('animated', 'pulse');
      });
      e.target.classList.add('animated', 'pulse');
      e.target.classList.add('active');
    }
  });

  function filter(items) {

    allContent.forEach(i => {
      i.style.display = 'none';
      i.classList.remove('animated', 'fadeIn');
    });

    noPortfolio.style.display = 'none';
    noPortfolio.classList.remove('animated', 'fadeIn');

    if (items) {
      items.forEach(i => {
        i.classList.add('animated', 'fadeIn');
        i.style.display = 'inline';
      });
    } else {
      noPortfolio.style.display = 'block';
      noPortfolio.classList.add('animated', 'fadeIn');
    }
  }
  all.addEventListener('click', () => {
    filter(allContent);
  });
  lovers.addEventListener('click', () => {
    filter(loversContent);
  });
  chef.addEventListener('click', () => {
    filter(chefContent);
  });
  girl.addEventListener('click', () => {
    filter(girlContent);
  });
  guy.addEventListener('click', () => {
    filter(guyContent);
  });
  grandmother.addEventListener('click', () => {
    filter();
  });
  granddad.addEventListener('click', () => {
    filter();
  });
};

export default tabs;