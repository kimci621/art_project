const menuBurger = (burgerbtn, burgermenu) => {
  const btn = document.querySelector(burgerbtn),
    menu = document.querySelector(burgermenu);

  menu.style.display = "none";

  btn.addEventListener('click', () => {
    if (window.screen.availWidth < 993 && menu.style.display == "none") {
      menu.classList.add("animated", "fadeInDown");
      menu.style.display = "block";
    } else {
      menu.classList.remove("animated", "fadeInDown");
      menu.style.display = "none";
    }
  });

  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menu.style.display = "none";
    }
  });



};
export default menuBurger;