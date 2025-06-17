const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

c.beginPath();
c.moveTo(100, 1000);
c.lineTo(100, 0);
c.strokeStyle = "#fa34a3";
c.stroke();

c.fillStyle = "rgba(255, 0, 0, 0.1)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "red";
c.fillRect(200, 300, 100, 100);
c.fillStyle = "blue";
c.fillRect(300, 500, 100, 100);

c.beginPath();
c.moveTo(0, 700);
c.lineTo(1000, 700);
c.strokeStyle = "white";
c.stroke();

c.beginPath();
c.moveTo(700, 0);
c.lineTo(700, 1000);
c.strokeStyle = "black";
c.stroke();

c.beginPath();
c.arc(500, 300, 50, 0, Math.PI * 2); // x,y radius startingANgle end Angle
c.fillStyle = "black";
c.fill();
