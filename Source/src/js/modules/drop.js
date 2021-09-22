const drop = () => {
  const uploads = document.querySelectorAll("[name='upload']");

  function preventDef(e) {
    e.preventDefault();
  }

  ['drop', 'dragenter', 'dragleave', 'dragover'].forEach(eventName => {
    uploads.forEach(upload => {
      upload.addEventListener(eventName, preventDef);
      // console.log(upload.previousElementSibling);
    });
  });

  function highlight(item) {
    item.previousElementSibling.style.border = "1px solid purple";
    item.previousElementSibling.style.backgroundColor = "#ededed";
  }

  function unHighlight(item) {
    item.previousElementSibling.style.border = "none";
    item.previousElementSibling.style.backgroundColor = "";
  }

  ['dragenter', 'dragover'].forEach(eventName => {
    uploads.forEach(upload => {
      upload.addEventListener(eventName, () => {
        highlight(upload);
      });
    });
  });

  uploads.forEach(upload => {
    upload.addEventListener('dragleave', () => {
      unHighlight(upload);
    });
  });

  uploads.forEach(upload => {
    upload.addEventListener('drop', (e) => {
      upload.files = e.dataTransfer.files;
      upload.previousElementSibling.textContent = e.dataTransfer.files[0].name;
      upload.previousElementSibling.previousElementSibling.textContent = e.dataTransfer.files[0].name;
    });
  });

};

export default drop;