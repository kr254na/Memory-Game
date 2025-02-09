const deck = JSON.parse(sessionStorage.getItem("deck"));
const data = JSON.parse(sessionStorage.getItem("Sequence"));
console.log(data);
let result = document.querySelector(".result");
let stopwatchDisplay = document.querySelector(".stopwatch");
        let startBtn = document.getElementById("start");
        let stopBtn = document.getElementById("stop");
        let resetBtn = document.getElementById("reset");

        let timer;
        let totalTime = 60000;
        let running = false;

        function formatTime(ms) {
            let totalSeconds = Math.floor(ms / 1000);
            let minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
            let seconds = String(totalSeconds % 60).padStart(2, "0");
            let milliseconds = String(ms % 1000).slice(0, 2).padStart(2, "0");
            return `${minutes}:${seconds}:${milliseconds}`;
        }

        function startStopwatch() {
            if (!running && totalTime > 0) {
                let startTime = Date.now();
                timer = setInterval(() => {
                    let elapsed = Date.now() - startTime;
                    totalTime -= elapsed;
                    startTime = Date.now();

                    if (totalTime <= 0) {
                        totalTime = 0;
                        clearInterval(timer);
                        stopwatchDisplay.textContent = "00:00:00";
                        startBtn.disabled = false;
                        stopBtn.disabled = true;
                        resetBtn.disabled = false;
                        running = false;
                        return;
                    }

                    stopwatchDisplay.textContent = formatTime(totalTime);
                }, 10);

                running = true;
                startBtn.disabled = true;
                result.enabled = true;
                stopBtn.disabled = false;
                resetBtn.disabled = false;
            }
        }

        function stopStopwatch() {
            clearInterval(timer);
            running = false;
            startBtn.disabled = false;
            stopBtn.disabled = true;
        }

        function resetStopwatch() {
            clearInterval(timer);
            totalTime = 60000; // Reset to 60 seconds
            stopwatchDisplay.textContent = "01:00:00";
            running = false;
            startBtn.disabled = false;
            stopBtn.disabled = true;
            resetBtn.disabled = true;
        }

        startBtn.addEventListener("click", startStopwatch);

stopBtn.addEventListener("click", stopStopwatch);
resetBtn.addEventListener("click", resetStopwatch);

let btn = document.querySelector(".result");
btn.addEventListener("click", () => {
    window.location.href = "/results";
})