import Phaser from 'phaser';

export default class Carrot extends Phaser.GameObjects.Sprite {
  /**
   * @param {Phaser.scene} scene
   * @param {number} x
   * @param {number} y
   * @param {string} texture
   */
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    this.setScale(0.5);
  }
}
