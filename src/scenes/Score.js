import Phaser from 'phaser';
import TweenHelper from '../helpers/TweenHelper';
import { getGameScores } from '../helpers/scoreHelper';
import * as buttonHelper from '../helpers/buttons';

import layer from '../assets/bg_layer1.png';

export default class Score extends Phaser.Scene {
  constructor() {
    super('score');
  }

  preload() {
    this.load.image('background', layer);
  }

  create() {
    this.add.image(240, 320, 'background');

    this.add
      .text(this.game.config.width * 0.5, 70, 'Score Board', {
        fontSize: 28,
        fontFamily: 'Play',
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

    this.setUpScores();
  }

  async setUpScores() {
    const resultObject = await getGameScores();

    if (Array.isArray(resultObject.result)) {
      this.scores = resultObject.result.sort((a, b) => (a.score > b.score ? -1 : 1));

      for (let i = 0; i < 15; i += 1) {
        const y = 150 + 30 * i;

        this.addText(150, y, this.scores[i].user);
        this.addText(400, y, this.scores[i].score);
      }
    } else {
      this.addText(150, 160, resultObject);
    }
  }

  addText(x, y, text) {
    this.add
      .text(x, y, text, {
        fontFamily: 'Orbitron',
        fontSize: 15,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      })
      .setOrigin(0.5);
  }
}
