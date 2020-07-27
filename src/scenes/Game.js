import Phaser from 'phaser';
import Layer from '../assets/bg_layer1.png';
import Platform from '../assets/ground_grass.png';
import BunnyStand from '../assets/bunny1_stand.png';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  preload() {
    this.load.image('background', Layer);
    this.load.image('platform', Platform);
    this.load.image('bunny-stand', BunnyStand);
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

    this.player = this.physics.add.sprite(240, 320, 'bunny-stand').setScale(0.5);
    this.physics.add.collider(platforms, this.player);
    this.player.body.checkCollision.up = false;
    this.player.body.checkCollision.left = false;
    this.player.body.checkCollision.right = false;
    this.cameras.main.startFollow(this.player);
  }

  update() {
    const touchingDown = this.player.body.touching.down;

    if (touchingDown) {
      this.player.setVelocityY(-300);
    }
  }
}
