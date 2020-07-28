import Phaser from 'phaser';
import Game from './scenes/Game';
import GameOver from './scenes/GameOver';

// require('./assets/bg_layer1.png');

const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  scene: [Game, GameOver],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200,
      },
      debug: true,
    },
  },
};

const game = new Phaser.Game(config);

export default game;