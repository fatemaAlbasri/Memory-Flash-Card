console.log('Connected Successfully')

////////////////////////////////
// Global Variables
let start = false
const images = [
  'images/card1.png',
  'images/card2.png',
  'images/card3.png',
  'images/card4.png'
]
let assignedImages = []

// Cached elements references
const startBtm = document.querySelector('.start')
const cards = document.querySelectorAll('.cardsBtn')
const homeBtm = document.querySelector('.home')
const hintBtm = document.querySelector('.hint')
const restartBtm = document.querySelector('.restartBtn')

const timer = document.querySelector('.timer')
const score = document.querySelector('.score')

////////////////////////////////
// Functions

// Shuffling images
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5)
}

// Start Game
const startGame = () => {
  start = true

  console.log('Game starting')

  const imagePairs = [...images, ...images]
  assignedImages = shuffleArray(imagePairs).slice(0, cards.length)

  cards.forEach((card, index) => {
    const img = document.createElement('img')
    img.setAttribute('src', assignedImages[index])
    img.style.width = '60px'
    img.style.height = '70px'
    card.appendChild(img)

    card.setAttribute('src', assignedImages[index])
  })

  // Hide all cards after 5 seconds
  setTimeout(() => {
    cards.forEach((card) => {
      const img = card.querySelector('img')
      if (img) img.remove()
    })
    console.log('Cards flipped back.')
  }, 5000)
}

// Select Card
const selectCard = (event) => {
  const card = event.currentTarget

  if (card.querySelector('img')) return

  const assignedImage = card.getAttribute('src')
  if (!assignedImage) return

  const img = document.createElement('img')
  img.setAttribute('src', assignedImage)
  img.style.width = '60px'
  img.style.height = '70px'

  card.appendChild(img)

  console.log('Clicked card, image:', assignedImage)
}

//hint button
const hint = () => {
  if (!start) return console.log('can not clicked hint button')

  cards.forEach((card) => {
    if (!card.querySelector('img')) {
      const image = card.getAttribute('src')
      if (image) {
        const img = document.createElement('img')
        img.setAttribute('src', image)
        img.style.width = '60px'
        img.style.height = '70px'
        card.appendChild(img)
      }
    }
  })

  console.log('Clicked hint button')

  setTimeout(() => {
    cards.forEach((card) => {
      const img = card.querySelector('img')
      if (img) img.remove()
    })
  }, 2000)
}

const home = () => {
  console.log('Clicked home button')
  window.location.href = 'levels.html'
}

const restart = () => {
  start = false
  console.log('Clicked restart button')
  cards.forEach((card) => {
    const img = card.querySelector('img')
    if (img) img.remove()
  })
}

// Event Listeners

cards.forEach((card) => {
  card.addEventListener('click', selectCard)
})
homeBtm.addEventListener('click', home)
startBtm.addEventListener('click', startGame)
restartBtm.addEventListener('click', restart)
hintBtm.addEventListener('click', hint)
