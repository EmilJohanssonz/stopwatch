const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (isRunning) return; 
    isRunning = true;
    startTime = Date.now() - elapsedTime; 
    timer = setInterval(update, 10); 
}

function stop() {
    if (!isRunning) return;
    isRunning = false;
    elapsedTime = Date.now() - startTime; 
    clearInterval(timer); 
}

function reset() {
    stop(); 
    elapsedTime = 0;
    display.textContent = "00:00:00:00"; 
}

function update() {
    const now = Date.now();
    const time = now - startTime; 
    const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, "0");
    const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, "0");
    const minutes = Math.floor((time / (1000 * 60)) % 60).toString().padStart(2, "0");
    const hours = Math.floor(time / (1000 * 60 * 60)).toString().padStart(2, "0");
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
