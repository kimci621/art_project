import modal from "./modules/modals";
import sliders from "./modules/sliders";
import dataFromForms from "./modules/forms";
import mask from "./modules/mask";
import validator from "./modules/validation";
import moreBtn from "./modules/morebtn";
import calc from "./modules/calc";
import tabs from "./modules/tabs";
import pictureSwap from "./modules/pictureSwap";
import accordion from "./modules/accordion";
import menuBurger from "./modules/menuBurger";
import LazyScroll from "./modules/lazyscroll";
import drop from "./modules/drop";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  drop();
  tabs();
  modal();
  LazyScroll('.pageup');
  menuBurger(".burger", ".burger-menu");
  accordion('.accordion-heading', '.accordion-block');
  dataFromForms();
  pictureSwap('.sizes-block');
  validator('[name="name"]');
  validator('[name="message"]');
  sliders(".feedback-slider-item", 'horizontal', ".main-prev-btn", ".main-next-btn");
  sliders(".main-slider-item", 'vertical', "", "");
  mask("tel-mask");
  mask("tel-mask2");
  mask("tel-mask3");
  moreBtn('.button-styles', '#styles .row');
  calc('#size', '#material', '#options', '.promocode', '.calc-price');
});