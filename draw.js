const down = document.getElementById("down"),
  left = document.getElementById("left"),
  right = document.getElementById("right"),
  up = document.getElementById("up");
const modal = document.querySelector(".modal");
const score = document.querySelector("#score");
const score2 = document.querySelector("#score2");
var mobileDirection;
const loseSound = new Audio("./incorrect.mp3");
const eatSound = new Audio("snakeeat.mp3");
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var snake;
var fruit;
(function setup() {
  snake = new Snake();
  fruit = new Fruit();
  fruit.pickLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation();
    }

    snake.checkCollision();
  }, 180);
})();

function clearModal(e) {
  if (e.target == modal) {
    console.log(e.target);
    modal.style.display = "none";
  }
}

window.addEventListener("keydown", function(e) {
  const direction = e.key.replace("Arrow", "");
  snake.changeDirection(direction);
});

window.addEventListener("click", clearModal);

down.addEventListener("click", function() {
  mobileDirection = "Down";
  snake.changeDirection(mobileDirection);
  window.navigator.vibrate(50);
});
left.addEventListener("click", function() {
  mobileDirection = "Left";
  snake.changeDirection(mobileDirection);
  window.navigator.vibrate(50);
});
right.addEventListener("click", function() {
  mobileDirection = "Right";
  snake.changeDirection(mobileDirection);
  window.navigator.vibrate(50);
});
up.addEventListener("click", function() {
  mobileDirection = "Up";
  snake.changeDirection(mobileDirection);
  window.navigator.vibrate(50);
});
