import Phaser from 'phaser';
import * as buttonHelper from '../helpers/buttons';
import WebFontFile from '../helpers/WebFontLoader';

import layer from '../assets/bg_layer1.png';
import platform from '../assets/ground_grass.png';
import bunnyStand from '../assets/bunny1_stand.png';
import carrot from '../assets/carrot.png';
import buttonUp from '../assets/green_button00.png';

export default class Instructions extends Phaser.Scene {
  constructor() {
    super('instructions');
  }

  preload() {
    this.load.image('background', layer);
    this.load.image('platform', platform);
    this.load.image('bunny-stand', bunnyStand);
    this.load.image('carrot', carrot);
    this.load.image('buttonUp', buttonUp);
    this.load.addFile(new WebFontFile(this.load, 'Play'));
  }

  create() {
    this.add.image(240, 320, 'background');

    this.add
      .text(this.game.config.width * 0.5, 70, 'Instructions', {
        fontSize: 28,
        fontFamily: 'Play',
      })
      .setOrigin(0.5);

    this.add.image(110, 150, 'bunny-stand').setScale(0.3);

    this.addSmallText(
      130,
      `This is your friend Thumper.
You can move using the arrow keys.`,
    );

    this.add.image(110, 255, 'platform').setScale(0.2);

    this.addSmallText(
      245,
      `These are the platforms.
Use them to advance in the game.`,
    );

    this.add.image(110, 345, 'carrot').setScale(0.3);

    this.addSmallText(
      330,
      `The carrots appear on platforms.
Collect them to get points.`,
    );

    this.add.text(
      100,
      420,
      `Do not fall or the game is over!
Survive for the longest possible.
Hit the space bar to start over.`,
      {
        fontSize: 20,
        fontFamily: 'Play',
        align: 'center',
      },
    );

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      560,
      buttonHelper.buttons.up,
    );

    buttonHelper.addButtonFunctionality(this, this.btnPlay, () => this.scene.start('start'));

    buttonHelper.addButtonText(this, 560, 'Menu');
  }

  addSmallText(y, text) {
    this.add.text(165, y, text, {
      fontSize: 15,
    });
  }
}
