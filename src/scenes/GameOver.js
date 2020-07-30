import Phaser from 'phaser';
import TweenHelper from '../helpers/TweenHelper';
import * as buttonHelper from '../helpers/buttons';

import layer from '../assets/bg_layer1.png';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super('game-over');
  }

  preload() {
    this.load.image('background', layer);
  }

  create() {
    this.add.image(240, 320, 'background'); 

    this.add
      .text(this.game.config.width * 0.5, 260, 'GAME OVER', {
        fontFamily: 'Play',
        fontSize: 45,
        fontStyle: 'bold',
        color: '#fff',
        align: 'center',
      })
      .setOrigin(0.5);

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      430,
      buttonHelper.buttons.up,
    );

    buttonHelper.addButtonFunctionality(this, this.btnPlay, () => this.scene.start('start'));

    buttonHelper.addButtonText(this, 430, 'Menu');

    this.startOver = this.add
      .text(this.game.config.width * 0.5, 560, 'Hit SPACE BAR to start over', {
        fontFamily: 'Play',
        fontSize: 15,
        fontStyle: 'bold',
        color: '#fff',
        align: 'center',
      })
      .setOrigin(0.5);
    TweenHelper.flashElement(this, this.startOver);

    this.input.keyboard.once('keydown_SPACE', () => {
      this.scene.start('game');
    });
  }
}