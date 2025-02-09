let countdownText = document.querySelector(".countdown-text");
let progress = document.querySelector(".progress");
let img = document.querySelector(".imagebox img");
let imagenumber = document.querySelector(".imageNumber");
const deck = JSON.parse(sessionStorage.getItem("Deck"));
let timeLeft = 15;
function getRandomNumber() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let randomNumbers = [];
    while(numbers.length>0){
        let randomIndex = Math.floor(Math.random() * numbers.length);
        randomNumbers.push(numbers.splice(randomIndex, 1)[0]);
    }
    return randomNumbers;
}
let randomImages = getRandomNumber();
sessionStorage.setItem("Sequence",JSON.stringify(randomImages));
console.log(randomImages);
let index = 0;
function updateCountdown() {
    if (timeLeft > 0) {
        //img.setAttribute("src",`/assets/deck1/${randomImages[15-timeLeft+1]}.png`)
        timeLeft--;
        countdownText.textContent = timeLeft;
        setTimeout(updateCountdown, 1000);
    } else {
        countdownText.textContent = "Time Over!";
        setTimeout(() => {
            console.log("Time Over!");
        },1000);
    }
    setTimeout(() => {
        img.setAttribute("src", `/assets/deck${deck}/${randomImages[index]}.png`);
        if (index > 11) {
            imagenumber.textContent = 'Lets Go';
        }
        else {
            imagenumber.textContent = index + 1;
        }
        index++;
    },2000)
}
setTimeout(() => {
    progress.style.animation = "countdownAnimation 15s linear forwards";
    imagenumber.textContent = '1';
    img.setAttribute("src", `/assets/deck${deck}/${randomImages[index]}.png`);
    updateCountdown();
    setTimeout(() => {
        window.location.href = "/timer";
    }, 17000);
}, 2000); 