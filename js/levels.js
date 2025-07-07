/* -------------------------- Global Variables ---------------------------*/
const totalLevels = 3

/* ------------------------------ Functions ------------------------------*/

const updateLevels = () => {
  // Get the highest unlocked level from sessionStorage (sessionStorage on cards.js endGame function)
  //The unlockedLevel is set in the endGame() function in cards.js
  let unlockedLevel = parseInt(sessionStorage.getItem('unlockedLevel')) || 1

  for (let i = 1; i <= totalLevels; i++) {
    const levelBtn = document.getElementById(`level${i}`)

    if (i <= unlockedLevel) {
      levelBtn.removeAttribute('disabled')

      levelBtn.addEventListener('click', () => {
        // Store the current level in sessionStorage
        sessionStorage.setItem('currentLevel', i)
        // Navigate to the corresponding cards page
        window.location.href = `cards${i}.html`
      })
    }
  }
}

/* -------------------------- Event Listeners ----------------------*/
document.addEventListener('DOMContentLoaded', updateLevels)
