const modal = () => {
  function bindModal(openTrigger, Modalselector, closeTrigger, destroy = false) {
    const open = document.querySelectorAll(openTrigger),
      modal = document.querySelector(Modalselector),
      close = document.querySelector(closeTrigger),
      popups = document.querySelectorAll('[data-modal]'),
      scrollWidth = hideScroll();
    let checkBtn = 0;

    open.forEach((item) => {
      item.addEventListener('click', (e) => {
        checkBtn = 1;
        if (e.target) {
          e.preventDefault();
        }

        if (destroy == true) {
          item.style.display = "none";
        }

        popups.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollWidth}px`;
        if (modal.style.display == 'block') {
          document.querySelector('.fixed-gift').style.marginRight = `${scrollWidth}px`;
        } else {
          return;
        }
      });
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
      if (modal.style.display == 'none') {
        document.querySelector('.fixed-gift').style.marginRight = `0px`;
      }
      popups.forEach((item) => {
        item.style.display = 'none';
      });
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
        if (modal.style.display == 'none') {
          document.querySelector('.fixed-gift').style.marginRight = `0px`;
        }
        popups.forEach((item) => {
          item.style.display = 'none';
        });
      }
    });

    function endPageModal(selector) {
      window.addEventListener('scroll', () => {
        let allScrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        let scrollingHeight = window.pageYOffset + document.documentElement.clientHeight;

        if (checkBtn != 1 && (scrollingHeight == allScrollHeight)) {
          document.querySelector(selector).click();
        }
      });

    }

    endPageModal('.fixed-gift');
  }

  function openModalTimer(selector, time) {
    let sw = hideScroll();
    setTimeout(function () {
      let displayStatus;

      document.querySelectorAll('[data-modal]').forEach((item) => {
        if (getComputedStyle(item).display !== 'none') {
          displayStatus = "true";
        }
      });

      if (displayStatus !== "true") {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${sw}px`;
      }
    }, time);
  }

  function hideScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  // openModalTimer('.popup-consultation', 60000);
};

export default modal;