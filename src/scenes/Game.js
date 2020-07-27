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
    const platforms = this.physics.add.staticGroup();

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; ++i) {
      const x = Phaser.Math.Between(80, 400);
      const y = 150 * i;

      /** @type {Phaser.Physics.Arcade.Sprite} */
      const platform = platforms.create(x, y, 'platform');
      platform.scale = 0.5;

      /** @type {Phaser.Physics.Arcade.StaticBody} */
      const { body } = platform;
      body.updateFromGameObject();
    }
  }
}
