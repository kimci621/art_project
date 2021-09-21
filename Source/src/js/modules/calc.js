const calc = (size, material, others, promo, result) => {
  const sizeSelector = document.querySelector(size),
    materialSelector = document.querySelector(material),
    othersSelector = document.querySelector(others),
    promoSelector = document.querySelector(promo),
    resultSelector = document.querySelector(result);

  let finalPrice = 0;

  function calcPrice() {
    finalPrice = +sizeSelector.value * (+materialSelector.value) + (+othersSelector.value);
    resultSelector.textContent = `Стоимость: ${finalPrice} рублей`;
    if (sizeSelector.value == "" || materialSelector.value == "") {
      resultSelector.textContent = `Выберите размер картины и материал картины!`;
    }else if(promoSelector.value === "IWANTPOPART"){
      finalPrice = finalPrice * 0.7;
      resultSelector.textContent = `Стоимость: ${finalPrice} рублей`;
    }
  }

  sizeSelector.addEventListener('change', calcPrice);
  materialSelector.addEventListener('change', calcPrice);
  othersSelector.addEventListener('change', calcPrice);
  promoSelector.addEventListener('input', calcPrice);
};

export default calc;