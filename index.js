fetch("./beaver.txt")
  .then((response) => response.text())
  .then(
    (text) => (document.getElementsByClassName("beaver")[0].textContent = text),
  );

// please dont steal :)
fetch(
  "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=baolong281&api_key=eb034c1d7da87addd82c346f5897b726&format=json&limit=1",
).then((response) => {
  response.json().then((data) => {
    artist = data.recenttracks.track[0].artist["#text"];
    song = data.recenttracks.track[0].name;
    img = data.recenttracks.track[0].image[2]["#text"];

    if (data["@attr"] && data["@attr"].nowplaying === "true") {
      document.getElementsByClassName("now-playing")[0].textContent =
        "currently listening to:";
    }

    document.getElementsByClassName("song-name")[0].textContent =
      `${song} by ${artist}`.toLowerCase();
    document.getElementsByClassName("song-img")[0].src = img;
  });
});
