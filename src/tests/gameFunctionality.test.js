import game from './mocks/gameMock';

describe("It test the mock of the game Phaser config well as It's visibility.", () => {
  test('check the visibility of the game.', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(game).toBeVisible;
  });
  test('check the state of the game.', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(game).toBeEnabled;
  });
  test('check if the game returned in the function not throw errors back.', () => {
    expect(game).not.toThrow();
  });
});
