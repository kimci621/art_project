const pictureSwap = (imgSelector) => {

  const imgBlocks = document.querySelectorAll(imgSelector);

  function show(item) {
    item.classList.add("animated", "fadeIn");
    let img = item.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';
    item.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = "none";
    });
  }

  function out(item) {
    item.classList.remove("animated", "fadeIn");
    let img = item.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';
    item.querySelectorAll('p').forEach(p => {
      p.style.display = "block";
    });
  }

  imgBlocks.forEach(item => {
    item.addEventListener('mouseover', () => {
      show(item);
    });
  });

  imgBlocks.forEach(item => {
    item.addEventListener('mouseout', () => {
      out(item);
    });
  });
};

export default pictureSwap;