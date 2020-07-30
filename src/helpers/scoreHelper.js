let nameInput;

const apiInfo = {
  url: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/',
  headers: {
    'Content-Type': 'application/json',
  },
  gameID: '1504TZsX2gyehoKXvxL4',
};

const getPlayerName = () => {
  const playerName = nameInput.value;
  if (playerName) {
    return playerName;
  }
  // eslint-disable-next-line no-alert
  alert('Name required');
  return false;
};

export const deleteNameInput = () => {
  nameInput.parentElement.removeChild(nameInput);
};

export const postScore = async (playerName, score) => {
  try {
    await fetch(`${apiInfo.url}games/:${apiInfo.gameID}/scores/`, {
      method: 'POST',
      headers: apiInfo.headers,
      body: JSON.stringify({ user: playerName, score }),
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const handleScore = async (scene, gameScore) => {
  const playerName = getPlayerName();
  const result = await postScore(playerName, gameScore);
  if (result) {
    scene.scene.start('Score');
    deleteNameInput();
  }
};

export const restartGame = (scene) => {
  scene.scene.start('Game');
  deleteNameInput();
};

export const createNameInput = () => {
  nameInput = document.createElement('input');
  nameInput.placeholder = 'Your name here';
  nameInput.type = 'text';
  document.querySelector('#game-container').appendChild(nameInput);
};

export const getGameScores = async () => {
  try {
    const rawResult = await fetch(`${apiInfo.url}games/:${apiInfo.gameID}/scores/`);
    const scoreBoard = await rawResult.json();
    return scoreBoard;
  } catch (error) {
    return 'Sorry, something went wrong.';
  }
};