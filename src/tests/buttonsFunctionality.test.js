import * as buttons from '../helpers/buttons';

describe('Tests functionality of buttons', () => {
  test('button renders properly', () => {
    expect(buttons.addButtonText.toBeEnabled);
  });
  test('interactivity is added to button', () => {
    expect(buttons.addButtonFunctionality.toBeEnabled);
  });
});