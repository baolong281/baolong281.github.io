fetch("./beaver.txt")
  .then((response) => response.text())
  .then(
    (text) => (document.getElementsByClassName("beaver")[0].textContent = text)
  );

fetch("https://chronicles.lol/last-song").then((response) =>
  response.json().then((json) => console.log(json))
);
