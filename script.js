function updateTextBasedOnWidth() {
  const teamName = document.querySelector('.team-name');
  const gameTitle = document.querySelector('.game-title');

  if (window.innerWidth <= 1000) {
    teamName.textContent = 'Subway';
    gameTitle.textContent = '《FTL》';
  } else {
    teamName.textContent = 'Subway Team';
    gameTitle.textContent = '《Finding The Light》';
  }
}

// 初始載入時執行一次
updateTextBasedOnWidth();

// 螢幕大小改變時再判斷一次
window.addEventListener('resize', updateTextBasedOnWidth);