import IMask from 'imask';

const mask = (selector) => {

  let element = document.getElementById(`${selector}`);
  let maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  IMask(element, maskOptions);
};

export default mask;