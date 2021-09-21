import modal from "./modules/modals";
import sliders from "./modules/sliders";
import dataFromForms from "./modules/forms";
import mask from "./modules/mask";
import validator from "./modules/validation";
import moreBtn from "./modules/morebtn";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';


  modal();
  dataFromForms();
  validator('[name="name"]');
  validator('[name="message"]');
  sliders(".feedback-slider-item", 'horizontal', ".main-prev-btn", ".main-next-btn");
  sliders(".main-slider-item", 'vertical', "", "");
  mask("tel-mask");
  mask("tel-mask2");
  mask("tel-mask3");
  moreBtn('.button-styles', '.styles-2');
});