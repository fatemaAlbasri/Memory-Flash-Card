# Memory-Flash-Card

![Image 1](https://i.pinimg.com/1200x/9a/d1/f0/9ad1f0fe488e6a4f5dc8e3694e2db0c4.jpg)

---

### By: Fatema Mohamed Albasri

---

### **_Description_**

Memory flash card game. The game displays a grid of face-down card, each card hiding an image. Player click on two cards at a time to flip them over, trying to find matching pairs.

To play the game: [Memory flash card](https://memoryflashcard.surge.sh/)

---

### **_Technologies Used_**

- HTML
- CSS
- Javascript

---

### **_Getting Started_**

- Start game

  - Click on start button to beign

- Levels ( Click on the level to play it)

  - The game includes multiple levels ( 3 levels )
    - Only the first level will unlocked at the begining
    - Other levels will unlock after completing the previous level

- Display cards

  - When the level starts, all cards will be shown **face-up** for 5 seconds to help you memorize them.
  - After 5 seconds , the cards will be flip back to hide the images.

- Click on two cards to flip them and try to find a matching pair.

  - If cards match, they will remain face-up.
  - if they don't match, they will flip back after a short delay

- The level will end when all matching pairs are found and cards are face-up.

- There is a **restart button**: if want to restart the current level
- There is a **hint button**: show all cards for seconds and flip back
- There is **home button**: returns to the main menue (levels page)

- There is a **timer**: tracks how long you spend complete the level

- There is a **score**: score increasese based on
  - How quickly you complete the level (based on timer)
  - Matching cards

---

### **_Wireframe_**

#### Start page

![Image 1](wireframe/start-page.jpg)

#### Levels page (Home page)

![Image 2](wireframe/levels-page.jpg)

#### Cards page

![Image 2](wireframe/card-page.jpg)

---

### **_Pseudo-Code_**

```
<--Start Page-->
  Wait until the player click on Start button
  Display levels page

<--Levels Page-->
  Set all levels to locked except level 1

  When player clicked on level
    if (the previous level is completed)
      Navigate to the corresponding Card page
    else
      Level is locked

<--Card Page-->
  When game start:
    Set start = true to indicate game is active
    Duplicate and shuffle image array to create matching pairs
    Assign each image to a card button
    Show all cards face-up
    Wait 5 seconds
    Flip all cards face-down
    Start timer

  // number must change every level
  Set matched cards = []
  // score updated every end level
  Set scoreCount = 0

    Wait until the player clicked on card
      if(the card already flip face-up || has an image)
        return
      else
        Flip the card and display the image.
        Push it to flippedCards array

      if (select two cards)
        if(matched)
          Add both cards to matchedCards.
          Increment scoreCount by 2.
          Clear flippedCards array

        else
          Flip them back (remove images)
          Clear flippedCards array
      if (all cards matched)
        End Game (call endgame())

        endGame()
          Stop timer

          if( time <= 10 seconds )
            scoreCount += 20
          else if ( time > 10 and time <= 20)
            scoreCount += 10
          else
            scoreCount += 5

          Display level completed , time , score, button to next level

          Unlock the next level in sessionStorage if not already unlocked

          Show "Next Level" button (navigates to next card.html)

  // buttons
    // restart
      Clears all game state: timer, score, matched cards, flipped cards.
      Resets all card images and data attributes.
      Remove the end game board

    // home
      Navigates to Levels page levels.html

    // hint
      Flips all unmatched cards face-up for 2 seconds
      Then hides unmatched cards again

```

---

### **_Credits_**

### CSS:

#### Colors : [Color hunt](https://colorhunt.co/)

#### Fonts : [Google Fonts](https://fonts.google.com/selection/embed)

#### Images : [pinterest](https://www.pinterest.com/) , [Canva](https://www.canva.com/design/DAGr3a-n0RI/ezC4qoxMflG4-4OBfFLQLw/edit) , [freepik](https://www.freepik.com/free-vector/cartoon-galaxy-background_14658064.htm#from_element=cross_selling__vector)

### JavaScript:

#### Shuffle an Array : [GeeksforGeeks](https://www.geeksforgeeks.org/javascript/how-to-shuffle-an-array-using-javascript/)

#### Timer : [w3schools](https://www.w3schools.com/js/js_timing.asp)

#### HTML attribute : [w3schools](https://www.w3schools.com/tags/ref_attributes.asp)

#### removeAttribute property : [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute)

#### sessionStorage property : [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

#### DOMContentLoaded event : [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)
