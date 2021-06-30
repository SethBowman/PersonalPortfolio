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