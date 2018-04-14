import {assert} from 'chai';
import displayResult from './showResults';

/** Mock data */
const statistics = [4, 5, 8, 11];

const player1 = {
  leftNotes: 3,
  leftTime: 25,
  points: 10
};

const player2 = {
  leftNotes: 3,
  leftTime: 25,
  points: 6
};

const timeOut = {
  leftNotes: 3,
  leftTime: 0,
  points: 7
};

const gameOver = {
  leftNotes: 0,
  leftTime: 450,
  points: 7
};

/** End mock data */

describe(`Should return game statistic`, () => {
  it(`should return right result`, () => {
    assert.equal(displayResult(statistics, player1), `Вы заняли 2 место из 5 игроков. Это лучше, чем у 60% игроков`);
    assert.equal(displayResult(statistics, player2), `Вы заняли 3 место из 5 игроков. Это лучше, чем у 40% игроков`);
  });

  it(`should return time is over`, () => {
    assert.equal(displayResult(statistics, timeOut), `Время вышло! Вы не успели отгадать все мелодии`);
  });

  it(`should return game is over`, () => {
    assert.equal(displayResult(statistics, gameOver), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
});
