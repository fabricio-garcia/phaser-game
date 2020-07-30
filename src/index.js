import Phaser from 'phaser';
import Start from './scenes/Start';
import Game from './scenes/Game';
import GameOver from './scenes/GameOver';

// require('./assets/bg_layer1.png');

const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  scene: [Start, Game, GameOver],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200,
      },
    },
  },
  pixelArt: true,
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
