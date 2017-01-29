# JavaScript TDD
## Purpose of this project
* Demonstrate practices that allow us to TDD JavaScript in a similar manner to how we Test Drive our work in other OO 
 languages.
* We'll use Jasmine as our unit testing and mocking framework.

## Jasmine Unit Tests
This is a good intro & reference: http://jasmine.github.io/2.0/introduction.html


## Setup
 1. Install XCode 
 2. Install Homebrew
 3. Install NodeJS `brew install node`
 4. Install Jasmine `npm install -g jasmine`
 5. Fork and clone this project
 6. Run `jasmine` from the command line inside of the project `js` directory

## Exercise
Implement these user stories by creating a new object using the functional object creation pattern

### User Stories
#### Make the rules work
##### Location already taken
If either player moves into a cell that is already used, display the message, “Location already taken” and prompt them to try again (repeat this until they make a valid move).

##### Repeat until the board is filled
Alternate player turns until the board is filled. Draw the board once it is full and display the message, “Game is a draw”.

##### Win by Filling a Row
After each move, if that player has three in a row horizontally, end the game and display the message, “Player <#> Wins!”.

##### Win by Filling a Column
After each move, if that player has three in a row vertically, end the game and display the message, “Player <#> Wins!”.

##### Win by Filling a Diagonal
After each move, if that player has three in a row diagonally, end the game and display the message, “Player <#> Wins!”.

#### AI Plays the Game
##### Computer Player
Replace one of the players with a computer player that chooses an empty location using whatever strategy to prefer.

##### Go for the win
The computer player should first choose an empty location if it allows them to win the game.

##### Block
After trying to win, the computer player should always block their opponent when they can win on their next move.

##### Fork
After checking for a block, the computer player should create an opportunity where they have two threats to win (two non-blocked lines of 2).

##### Block Fork
After trying to fork, the computer player should choose any location where the opponent could create a fork on their next turn.

##### Center
After trying to block a fork, the computer player should move in the center location if it is empty.

##### Opposite Corner
If the opponent has played in a corner, the computer player should play in the opposite corner.

##### Corner
The computer player should play in an empty corner location.

##### Side
The computer player should play in an empty side location.

##### Fight!
Replace the human player with a computer player and have the computer players play 100 games. Then report the number of games that each player won.

