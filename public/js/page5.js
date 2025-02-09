let images = document.querySelectorAll(".result-grid img");
const deck = JSON.parse(sessionStorage.getItem("Deck"));
const data=JSON.parse(sessionStorage.getItem("Sequence"));
let i = 0;
for (let img of images) {
    img.setAttribute(`src`, `/assets/deck${deck}/${data[i]}.png`);
    i++;
}