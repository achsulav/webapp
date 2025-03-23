const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const gridSize = 20; // Size of each grid square
const tileCount = canvas.width / gridSize; // Number of tiles in each row/column

let snake = [{ x: 10, y: 10 }]; // Initial snake position
let direction = { x: 0, y: 0 }; // Initial direction (not moving)
let food = { x: 5, y: 5 }; // Initial food position
let score = 0;

// Function to update the game state
function update() {
    // Calculate the new head position
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // Check for collision with walls or itself
    if (
        head.x < 0 || head.x >= tileCount ||
        head.y < 0 || head.y >= tileCount ||
        snake.some(segment => segment.x === head.x && segment.y === head.y)
    ) {
        resetGame();
        return;
    }

    // Add the new head to the snake
    snake.unshift(head);

    // Check if the snake eats the food
    if (head.x === food.x && head.y === food.y) {
        score++;
        // Generate new food at a random position
        food = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
    } else {
        // Remove the tail if no food is eaten
        snake.pop();
    }
}

// Function to draw the game
function draw() {
    // Clear the canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the snake
    ctx.fillStyle = "lime";
    snake.forEach(segment => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });

    // Draw the food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

    // Draw the score
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
}

// Function to reset the game
function resetGame() {
    snake = [{ x: 10, y: 10 }];
    direction = { x: 0, y: 0 };
    score = 0;
    food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
    };
}

// Handle keyboard input
document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowUp":
            if (direction.y === 0) direction = { x: 0, y: -1 }; // Move up
            break;
        case "ArrowDown":
            if (direction.y === 0) direction = { x: 0, y: 1 }; // Move down
            break;
        case "ArrowLeft":
            if (direction.x === 0) direction = { x: -1, y: 0 }; // Move left
            break;
        case "ArrowRight":
            if (direction.x === 0) direction = { x: 1, y: 0 }; // Move right
            break;
    }
});

// Game loop
function gameLoop() {
    update();
    draw();
    setTimeout(gameLoop, 100); // Run the game loop every 100ms
}

// Start the game
gameLoop();
