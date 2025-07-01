console.log('Connected Successfully')

// Global Variables Here
const cards = document.querySelectorAll('.cards')
const homeBtm = document.querySelector('.home')
const hintBtm = document.querySelector('.hint')
const restartBtm = document.querySelector('.restart')

let timer = document.querySelector('.timer')
let score = document.querySelector('.score')

const images = [
  'images/card1.png',
  'images/card2.png',
  'images/card3.png',
  'images/card4.png',
  'images/card5.png',
  'images/card6.png'
]

const img = document.createElement('img')

// Functions
const selectCard = () => {
  cards.forEach((card) => {
    images.forEach((image) => {
      let selectedImage = image
      card.appendChild(img)
      img.setAttribute('src', selectedImage)
    })
  })

  console.log('clicked button')
}
const hint = () => {
  console.log('clicked hint button')
}
const home = () => {
  console.log('clicked home button')
  window.location.href = 'levels.html'
}

const restart = () => {
  console.log('clicked restart button')
}

// Event Listeners Here
cards.forEach((card) => {
  card.addEventListener('click', selectCard)
})
homeBtm.addEventListener('click', home)

restartBtm.addEventListener('click', restart)
hintBtm.addEventListener('click', hint)
