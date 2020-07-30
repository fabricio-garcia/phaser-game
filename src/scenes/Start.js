import Phaser from 'phaser';
import * as buttonHelper from '../helpers/buttons';
import WebFontFile from '../helpers/WebFontLoader';

import layer from '../assets/bg_layer1.png';
import buttonUp from '../assets/green_button00.png';
import buttonDown from '../assets/green_button01.png';
import bunny1 from '../assets/bunny1_walk1.png';

import buttonDownSound from '../assets/sndBtnDown.wav';

export default class Start extends Phaser.Scene {
  constructor() {
    super('start');
  }

  preload() {
    this.load.image('background', layer);
    this.load.image('buttonUp', buttonUp);
    this.load.image('buttonDown', buttonDown);
    this.load.image('bunny1', bunny1);
    this.load.audio('buttonDownSound', buttonDownSound);
    this.load.addFile(new WebFontFile(this.load, 'Play'));
  }

  create() {
    this.add.image(240, 320, 'background');
    this.sfx = {
      btnDown: this.sound.add('buttonDownSound'),
    };
    this.add.image(240, 320, 'bunny1').setScale(0.5);
    this.btnInstructions = this.add.sprite(
      this.game.config.width * 0.5,
      400,
      buttonHelper.buttons.up,
    );
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      460,
      buttonHelper.buttons.up,
    );
    this.btnScore = this.add.sprite(
      this.game.config.width * 0.5,
      520,
      buttonHelper.buttons.up,
    );
    buttonHelper.addButtonFunctionality(this, this.btnInstructions, () => this.scene.start('instructions'));
    buttonHelper.addButtonFunctionality(this, this.btnPlay, () => this.scene.start('game'));
    buttonHelper.addButtonFunctionality(this, this.btnScore, () => this.scene.start('score'));
    buttonHelper.addButtonText(this, 400, 'Instructions');
    buttonHelper.addButtonText(this, 460, 'Play');
    buttonHelper.addButtonText(this, 520, 'Score board');
    this.title = this.add
      .text(this.game.config.width * 0.5, 175, 'JUMPING RABBIT', {
        fontFamily: 'Play',
        fontSize: 45,
        fontStyle: 'bold',
        color: '#fff',
        align: 'center',
      })
      .setOrigin(0.5);
  }
}
