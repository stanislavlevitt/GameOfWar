**Game of War**
<br/>

## Tech Stack

---

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Vite](https://vitejs.dev/)

<br />
---

**From the terminal run:**

<pre>
git clone https://github.com/stanislavlevitt/GameOfWar.git
cd into client
npm install
npm run dev
</pre>

**After npm run dev**<br />
The App will start running in development mode.<br />
Open [http://localhost:5173/](http://localhost:5173/)<br />
The page will reload if you make edits.

## Game Overview
This app simulates the card game War between two computer players.
The rules of the game can be found [here](https://en.wikipedia.org/wiki/War_(card_game))

A deck of cards will be distributes between the two computer players

Each round, both player reveals the first card in their deck. Whichever player's card has a higher value wins the two cards. If the two players' card values match, they play War.

The game ends when one player has all 52 cards, or if one player does not have enough cards to play War.

## App Walk through
<p align="center">
  <img src="/client/src/assets/screenShot.png"/>
</p>
<p align="center"><strong> Clicking on the New Game Button will reset the entire gameboard. Both Computer players will be given a new starting deck to play with
</strong></p>
<br />
<p align="center"><strong> Clicking on the Draw Button will start a round. Both players will reveal their top card. Highest value will win that round. If that values are the same, the program will automatically play War until their is a winner determined for the round.
</strong></p>
<br />
<p align="center"><strong> At the bottom of the board there is a status infomation detailing:
<ul>
<li>Winner of the game</li>
<li>Current round number</li>
<li>How many times war has been played</li>
<li>Deck sizes of both players</li>
</ul>
</strong></p>
<br />
