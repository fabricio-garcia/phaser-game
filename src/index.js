import Phaser from 'phaser';
import Start from './scenes/Start';
import Instructions from './scenes/Instructions';
import Game from './scenes/Game';
import GameOver from './scenes/GameOver';
import Score from './scenes/Score';
import './styles/main.css';

const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  scene: [Start, Instructions, Game, GameOver, Score],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200,
      },
    },
  },
  pixelArt: true,
  // parent: document.querySelector('#game-container'),
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
