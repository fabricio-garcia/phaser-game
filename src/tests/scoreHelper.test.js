import * as scoreHelper from '../helpers/scoreHelper';

global.fetch = require('jest-fetch-mock');

describe('Post score function', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('returns true if API call is successful', async () => {
    fetch.mockResponseOnce(JSON.stringify('fake successful message'));
    const result = await scoreHelper.postScore('Fabricio', 100);
    expect(result).toBe(true);
  });

  it('returns false if API fails', async () => {
    fetch.mockRejectOnce(new Error('fake error message'));
    const result = await scoreHelper.postScore('John', 10);
    expect(result).toBe(false);
  });

  test('calls API with correct arguments', async () => {
    fetch.mockResponseOnce(JSON.stringify('fake successful message'));
    await scoreHelper.postScore('Fabricio', 100);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch.mock.calls[0][1].body).toEqual(JSON.stringify({ user: 'Fabricio', score: 100 }));
  });
});

describe('Get game scores', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('returns an array of objects if API completes successfully', async () => {
    fetch.mockResponseOnce(JSON.stringify([{ user: 'Fabricio', score: 100 }]));
    const scoreBoard = await scoreHelper.getGameScores('Fabricio', 100);

    expect(scoreBoard).toEqual([{ user: 'Fabricio', score: 100 }]);
  });

  it('returns error message if API fails', async () => {
    fetch.mockRejectOnce(new Error('fake error message'));
    const scoreBoard = await scoreHelper.getGameScores('Fabricio', 100);
    expect(scoreBoard).toBe('Sorry, something went wrong.');
  });
});