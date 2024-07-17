fetch("./beaver.txt")
  .then((response) => response.text())
  .then(
    (text) => (document.getElementsByClassName("beaver")[0].textContent = text)
  );
