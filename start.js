/* --------------------- Cached elements references ---------------------*/
const startBtn = document.querySelector('#start')

/* ------------------------------ Functions ------------------------------*/
const start = () => {
  window.location.href = 'levels.html'
}

/* ---------------------------- Event Listeners ---------------------------*/

startBtn.addEventListener('click', start)
