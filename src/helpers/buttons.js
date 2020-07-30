export const buttons = {
  up: 'buttonUp',
  down: 'buttonDown',
};

export const addButtonText = (scene, y, text) => {
  scene.add
    .text(scene.game.config.width * 0.5, y, text, {
      color: '#fff',
      fontSize: 20,
      fontFamily: 'Play',
    })
    .setOrigin(0.5);
};

export const addButtonFunctionality = (scene, button, callback) => {
  button.setInteractive();

  button.on(
    'pointerdown',
    () => {
      button.setTexture(buttons.down);
      scene.sfx.btnDown.play();
    },
    scene,
  );

  button.on(
    'pointerup',
    () => {
      button.setTexture(buttons.up);
      callback();
    },
    scene,
  );
};
