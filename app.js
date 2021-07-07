fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=LvM2qVpX9reYwFDOIIceoI0Dx0oqDSgH&s=coding"
)
  .then(async (data) => {
    let parsedData = await data.json();
    let img = document.getElementById("gif");
    img.src = parsedData.data.images.original.url;
    img.alt = parsedData.data.title;
  })
  .catch((err) => {
    console.log(err);
  });

// Wrap every letter in a span
var textWrapper = document.querySelector(".AnimatedHeading");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".AnimatedHeading .letter",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i,
  })
  .add({
    targets: ".AnimatedHeading .letter",
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i,
  });

anime
  .timeline({ loop: true })
  .add({
    targets: ".ParaAnime .word",
    scale: [2, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i,
  })
  .add({
    targets: ".ParaAnime",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
