import modal from "./modules/modals";
import sliders from "./modules/sliders";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modal();
  sliders(".feedback-slider-item", 'horizontal', ".main-prev-btn", ".main-next-btn");
  sliders(".main-slider-item", 'vertical', "", "");
});