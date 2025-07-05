/* --------------------- Cached elements references ---------------------*/
const levelOneBtn = document.querySelector('#levelOne')
const levelTwoBtn = document.querySelector('#levelTwo')
const levelThreeBtn = document.querySelector('#levelThree')

/* ------------------------------ Functions ------------------------------*/
const levelOne = () => {
  window.location.href = '../html/cards1.html'
}
const levelTwo = () => {
  window.location.href = '../html/cards2.html'
}
const levelThree = () => {
  window.location.href = '../html/cards3.html'
}

/* ---------------------------- Event Listeners ---------------------------*/

levelOneBtn.addEventListener('click', levelOne)
levelTwoBtn.addEventListener('click', levelTwo)
levelThreeBtn.addEventListener('click', levelThree)
