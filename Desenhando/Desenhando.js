const color = document.querySelector('input[type="color"]');
const screen = document.querySelector('canvas');

let defaultColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

const ctx = screen.getContext('2d');

color.addEventListener('change', (event) => {
  defaultColor = event.target.value;
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

function mouseDownEvent(e) {
  canDraw = true;
  mouseX = e.pageX - screen.offsetLeft;
  mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e) {
  if (canDraw) {
    draw(e.pageX, e.pageY);
  }
}

function mouseUpEvent() {
  canDraw = false;
}

function draw(x, y) {
  const pointX = x - screen.offsetLeft;
  const pointY = y - screen.offsetTop;

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineJoin = 'round';
  ctx.moveTo(mouseX, mouseY);
  ctx.lineTo(pointX, pointY);
  ctx.closePath();
  ctx.strokeStyle = defaultColor;
  ctx.stroke();

  mouseX = pointX;
  mouseY = pointY;
}

function clearBoard() {
  ctx.clearRect(0, 0, screen.width, screen.height);
}