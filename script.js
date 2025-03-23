const bike = document.getElementById("bike");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");
let bikePosition = 180;
let obstaclePosition = Math.floor(Math.random() * 340);
let score = 0;
let isGameOver = false;

function moveBike(event) {
    if (isGameOver) return;

    if (event.key === "ArrowLeft" && bikePosition > 0) {
        bikePosition -= 10;
    } else if (event.key === "ArrowRight" && bikePosition < 360) {
        bikePosition += 10;
    }

    bike.style.left = bikePosition + "px";
}

function updateObstacle() {
    if (isGameOver) return;

    const obstacleTop = parseInt(window.getComputedStyle(obstacle).top);
    if (obstacleTop > 600) {
        obstaclePosition = Math.floor(Math.random() * 340);
        obstacle.style.left = obstaclePosition + "px";
        obstacle.style.top = "0";
        score++;
        scoreDisplay.textContent = score;
    } else {
        obstacle.style.top = obstacleTop + 5 + "px";
    }

    checkCollision();
}

function checkCollision() {
    const bikeRect = bike.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        bikeRect.left < obstacleRect.right &&
        bikeRect.right > obstacleRect.left &&
        bikeRect.top < obstacleRect.bottom &&
        bikeRect.bottom > obstacleRect.top
    ) {
        isGameOver = true;
        alert(`Game Over! Your score is ${score}.`);
        resetGame();
    }
}

function resetGame() {
    bikePosition = 180;
    bike.style.left = bikePosition + "px";
    obstaclePosition = Math.floor(Math.random() * 340);
    obstacle.style.left = obstaclePosition + "px";
    obstacle.style.top = "0";
    score = 0;
    scoreDisplay.textContent = score;
    isGameOver = false;
}

document.addEventListener("keydown", moveBike);
setInterval(updateObstacle, 20);
