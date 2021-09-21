const validator = (selector) => {
  const allInputs = document.querySelectorAll(selector);

  allInputs.forEach((input) => {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^а-яё]/ig)) {
        e.preventDefault();
      }
    });
    input.addEventListener('input', () => {
      if (input.value.match(/\w/ig)) {
        input.value = "";
      }
    });
  });
};

export default validator;