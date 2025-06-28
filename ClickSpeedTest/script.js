const clickArea = document.getElementById('click-area');
const clickCountSpan = document.getElementById('click-count');
const timerSpan = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const resultParagraph = document.getElementById('result');

let clicks = 0;
let timeLeft = 10; // seconds
let timerInterval;
let gameStarted = false;

function startGame() {
    clicks = 0;
    timeLeft = 10;
    gameStarted = true;
    clickCountSpan.textContent = clicks;
    timerSpan.textContent = timeLeft;
    resultParagraph.textContent = '';
    startButton.disabled = true;
    clickArea.classList.add('active');

    timerInterval = setInterval(() => {
        timeLeft--;
        timerSpan.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timerInterval);
    gameStarted = false;
    startButton.disabled = false;
    clickArea.classList.remove('active');
    const cps = (clicks / 10).toFixed(2);
    resultParagraph.textContent = `Game Over! You clicked ${clicks} times. Your CPS: ${cps}`;
}

clickArea.addEventListener('click', () => {
    if (gameStarted) {
        clicks++;
        clickCountSpan.textContent = clicks;
    }
});

startButton.addEventListener('click', startGame);