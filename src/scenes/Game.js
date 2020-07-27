import Phaser from 'phaser';
import Layer from '../assets/bg_layer1.png';
import Platform from '../assets/ground_grass.png';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  preload() {
    this.load.image('background', Layer);
    this.load.image('platform', Platform);
  }

  create() {
    this.add.image(240, 320, 'background');
    this.add.image(240, 320, 'platform').setScale(0.5);
  }
}
