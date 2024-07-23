fetch("./beaver.txt")
  .then((response) => response.text())
  .then(
    (text) => (document.getElementsByClassName("beaver")[0].textContent = text)
  );

fetch("https://chronicles.lol/last-song").then((response) =>
  response.json().then((data) => {
    console.log(data);
    artist = data.artist["#text"];
    song = data.name;
    img = data.image[2]["#text"];

    if (data["@attr"] && data["@attr"].nowplaying === "true") {
      document.getElementsByClassName("now-playing")[0].textContent =
        "currently listening to:";
    }

    document.getElementsByClassName("song-name")[0].textContent =
      `${song} by ${artist}`.toLowerCase();
    document.getElementsByClassName("song-img")[0].src = img;
  })
);
