/* -------------------------- Global Variables ---------------------------*/
const totalLevels = 3

/* ------------------------------ Functions ------------------------------*/

const updateLevels = () => {
  let unlockedLevel = parseInt(sessionStorage.getItem('unlockedLevel')) || 1

  for (let i = 1; i <= totalLevels; i++) {
    const levelBtn = document.getElementById(`level${i}`)
    if (!levelBtn) continue
    if (i <= unlockedLevel) {
      levelBtn.removeAttribute('disabled')
      levelBtn.addEventListener('click', () => {
        sessionStorage.setItem('currentLevel', i)
        window.location.href = `cards${i}.html`
      })
    } else {
      levelBtn.setAttribute('disabled', true)
    }
  }
}

/* -------------------------- Event Listeners ----------------------*/

document.addEventListener('DOMContentLoaded', updateLevels)
