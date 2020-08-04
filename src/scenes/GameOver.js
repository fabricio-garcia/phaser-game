import Phaser from 'phaser';
import TweenHelper from '../helpers/TweenHelper';
import * as scoreHelper from '../helpers/scoreHelper';
import * as buttonHelper from '../helpers/buttons';

import layer from '../assets/bg_layer1.png';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super('game-over');
  }

  init(data) {
    this.gameScore = data.score;
  }

  preload() {
    this.load.image('background', layer);
  }

  create() {
    this.add.image(240, 320, 'background');

    this.add
      .text(this.game.config.width * 0.5, 130, 'GAME OVER', {
        fontFamily: 'Play',
        fontSize: 45,
        fontStyle: 'bold',
        color: '#fff',
        align: 'center',
      })
      .setOrigin(0.5);

    this.add
      .text(225, 180, `Your score: ${this.gameScore}`, {
        fontFamily: 'Play',
        fontSize: 20,
        fontStyle: 'bold',
        color: '#fff',
        align: 'center',
      })
      .setOrigin(0.5);

    scoreHelper.createNameInput();

    this.btnSubmit = this.add.sprite(
      this.game.config.width * 0.5,
      380,
      buttonHelper.buttons.up,
    );

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      450,
      buttonHelper.buttons.up,
    );

    // eslint-disable-next-line max-len
    buttonHelper.addButtonFunctionality(this, this.btnSubmit, () => scoreHelper.handleScore(this, this.gameScore));
    buttonHelper.addButtonFunctionality(this, this.btnPlay, () => scoreHelper.backToMenu(this));
    buttonHelper.addButtonText(this, 380, 'Submit score');
    buttonHelper.addButtonText(this, 450, 'Menu');

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
      scoreHelper.restartGame(this);
    });
  }
}
