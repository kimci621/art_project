const sliders = (slides, direction, prevSelector, nextSelector) => {

  let slideIndex = 0,
    pause = false;
  const items = document.querySelectorAll(slides);

  //main slider mecha
  function showSlides() {
    if (slideIndex > items.length - 1) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = items.length - 1;
    }

    items.forEach((item) => {
      item.classList.add("animated");
      item.style.display = "none";
    });

    //main slide on page
    items[slideIndex].style.display = 'block';
  }

  showSlides();

  //btns
  try {
    const prevBtn = document.querySelector(prevSelector),
      nextBtn = document.querySelector(nextSelector);

    prevBtn.addEventListener("click", () => {
      slideIndex -= 1;
      showSlides();
      items[slideIndex].classList.remove("slideInRight");
      items[slideIndex].classList.add("slideInLeft");
    });
    nextBtn.addEventListener("click", () => {
      slideIndex += 1;
      showSlides();
      items[slideIndex].classList.remove("slideInLeft");
      items[slideIndex].classList.add("slideInRight");
    });
  } catch (error) {}

  function activateAnime() {
    if (direction === "vertical") {
      pause = setInterval(function () {
        slideIndex += 1;
        showSlides();
        items[slideIndex].classList.add("slideInDown");
      }, 4000);
    } else {
      pause = setInterval(function () {
        slideIndex += 1;
        showSlides();
        items[slideIndex].classList.remove("slideInLeft");
        items[slideIndex].classList.add("slideInRight");
      }, 4000);
    }
  }
  activateAnime();

  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(pause);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnime();
  });


};

export default sliders;