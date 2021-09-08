const modal = () => {
  function bindModal(openTrigger, Modalselector, closeTrigger, BgOverlayClick = true) {
    const open = document.querySelectorAll(openTrigger),
      modal = document.querySelector(Modalselector),
      close = document.querySelector(closeTrigger),
      popups = document.querySelectorAll('[data-modal]'),
      scrollWidth = hideScroll();


    open.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollWidth}px`;
      });
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
      popups.forEach((item) => {
        item.style.display = 'none';
      });
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal && BgOverlayClick) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
        popups.forEach((item) => {
          item.style.display = 'none';
        });
      }
    });
  }

  function openModalTimer(selector, time) {
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
  openModalTimer('.popup-consultation', 60000);
};

export default modal;