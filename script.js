const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

let bikeY = canvas.height / 2;
let bikeHeight = 30;
let bikeWidth = 50;
let speed = 3;
let obstacles = [];
let score = 0;

document.addEventListener("keydown", moveBike);

function moveBike(e) {
    if (e.key === "ArrowUp" && bikeY > 0) bikeY -= 20;
    if (e.key === "ArrowDown" && bikeY < canvas.height - bikeHeight) bikeY += 20;
}

function createObstacle() {
    let height = Math.random() * 100 + 20;
    obstacles.push({ x: canvas.width, y: Math.random() * (canvas.height - height), width: 20, height });
}

function updateObstacles() {
    obstacles.forEach((obs, index) => {
        obs.x -= speed;
        if (obs.x + obs.width < 0) {
            obstacles.splice(index, 1);
            score++;
        }

        // Collision Detection
        if (
            obs.x < bikeWidth &&
            obs.x + obs.width > 0 &&
            bikeY < obs.y + obs.height &&
            bikeY + bikeHeight > obs.y
        ) {
            alert(`Game Over! Your score: ${score}`);
            document.location.reload();
        }
    });
}

function drawBike() {
    ctx.fillStyle = "#0f0";
    ctx.fillRect(10, bikeY, bikeWidth, bikeHeight);
}

function drawObstacles() {
    ctx.fillStyle = "#f00";
    obstacles.forEach((obs) => {
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    });
}

function drawScore() {
    ctx.fillStyle = "#fff";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBike();
    drawObstacles();
    drawScore();
    updateObstacles();

    if (Math.random() < 0.02) {
        createObstacle();
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();
