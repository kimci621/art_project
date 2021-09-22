const accordion = (triggers, contents) => {
  const allTriggers = document.querySelectorAll(triggers);
  const allContent = document.querySelectorAll(contents);

  allContent.forEach(item => {
    item.style.display = 'none';
  });

  allTriggers.forEach(item => {
    item.addEventListener('click', function () {
      this.classList.toggle('active');
      if (this.classList.contains('active')) {
        this.style.color = "#c51abb";
        this.nextSibling.nextSibling.classList.add('animated', 'fadeInUp');
        this.nextSibling.nextSibling.style.display = "block";
      } else {
        this.style.color = "";
        this.nextSibling.nextSibling.classList.remove('animated', 'fadeInUp');
        this.nextSibling.nextSibling.style.display = "none";
      }
    });
  });
};

export default accordion;