import Phaser from 'phaser';
import Layer from '../assets/bg_layer1.png';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  preload() {
    this.load.image('background', Layer);
  }

  create() {
    this.add.image(240, 320, 'background');
  }
}
