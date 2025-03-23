const canvas = document.getElementById("bikeCanvas");
const ctx = canvas.getContext("2d");

// Draw the bike frame
ctx.beginPath();
ctx.moveTo(100, 200); // Start point
ctx.lineTo(150, 150); // Diagonal to handle
ctx.lineTo(200, 150); // Handlebar
ctx.lineTo(250, 200); // Diagonal to seat
ctx.lineTo(300, 200); // Seat
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();

// Draw the handle (black)
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(150, 100);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();

// Draw the seat (black)
ctx.beginPath();
ctx.arc(300, 200, 10, 0, Math.PI * 2);
ctx.fillStyle = "black";
ctx.fill();

// Draw the engine (white)
ctx.beginPath();
ctx.arc(200, 200, 30, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();

// Draw the stand (grey)
ctx.beginPath();
ctx.moveTo(220, 230);
ctx.lineTo(220, 270);
ctx.lineTo(240, 270);
ctx.strokeStyle = "grey";
ctx.lineWidth = 5;
ctx.stroke();

// Draw the wheels
ctx.beginPath();
ctx.arc(150, 250, 30, 0, Math.PI * 2); // Front wheel
ctx.arc(300, 250, 30, 0, Math.PI * 2); // Rear wheel
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();
