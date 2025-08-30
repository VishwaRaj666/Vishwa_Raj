const player = document.getElementById('playerCar');
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
const gameOverScreen = document.getElementById('gameOver');
const finalScoreDisplay = document.getElementById('finalScore');
const healthBar = document.getElementById('healthBar');

let score = 0;
let health = 100;
let gameInterval;
let enemyInterval;
let speed = 5;
let playerX = 175;
let playerY = 10;
let isJumping = false;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && playerX > 0) {
    playerX -= 25;
  }
  if (e.key === 'ArrowRight' && playerX < 350) {
    playerX += 25;
  }
  if (e.key === ' ' && !isJumping) {
    jump();
  }
  player.style.left = playerX + 'px';
});

function jump() {
  isJumping = true;
  let jumpHeight = 0;
  const up = setInterval(() => {
    if (jumpHeight >= 100) {
      clearInterval(up);
      const down = setInterval(() => {
        if (jumpHeight <= 0) {
          clearInterval(down);
          isJumping = false;
        } else {
          jumpHeight -= 5;
          player.style.bottom = (playerY + jumpHeight) + 'px';
        }
      }, 20);
    } else {
      jumpHeight += 5;
      player.style.bottom = (playerY + jumpHeight) + 'px';
    }
  }, 20);
}

function createEnemy() {
  const enemy = document.createElement('div');
  enemy.classList.add('enemy-car');
  enemy.style.left = Math.floor(Math.random() * 8) * 50 + 'px';
  enemy.style.top = '0px';
  gameArea.appendChild(enemy);

  let enemyY = 0;
  const moveEnemy = setInterval(() => {
    enemyY += speed;
    enemy.style.top = enemyY + 'px';

    if (enemyY > 600) {
      clearInterval(moveEnemy);
      gameArea.removeChild(enemy);
      score++;
      scoreDisplay.textContent = score;
    }

    if (isColliding(player, enemy)) {
      reduceHealth(20);
      clearInterval(moveEnemy);
      gameArea.removeChild(enemy);
    }

  }, 30);
}

function isColliding(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top > bRect.bottom ||
    aRect.bottom < bRect.top ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}

function reduceHealth(amount) {
  health -= amount;
  if (health < 0) health = 0;
  healthBar.style.width = health + '%';

  if (health === 0) {
    gameOver();
  }
}

function gameOver() {
  clearInterval(gameInterval);
  clearInterval(enemyInterval);
  finalScoreDisplay.textContent = score;
  gameOverScreen.style.display = 'block';
}

function restartGame() {
  window.location.reload();
}

function startGame() {
  health = 100;
  healthBar.style.width = health + '%';
  score = 0;
  scoreDisplay.textContent = score;
  gameInterval = setInterval(() => {
    speed += 0.01;
  }, 1000);
  enemyInterval = setInterval(createEnemy, 1000);
}

startGame();
