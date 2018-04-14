import {expect} from 'chai';
import getScores from './getScores';
import {TOTAL_ANSWERS_LENGTH} from '../constants';

describe(`Get Scores function`, () => {
  it(`Should return -1 if answers less than 10`, () => {
    const answers = [];
    expect(getScores(answers)).to.equal(-1);
  });

  it(`Should return 10 if all answers is ok and is not fast`, () => {
    const answers = [];
    const expectedScores = 10;

    answers.length = TOTAL_ANSWERS_LENGTH;
    answers.fill({type: `WRITE`, leftTime: 35});

    expect(getScores(answers)).to.equal(expectedScores);
  });

  it(`Should return 8 if one answer is wrong and other are normal`, () => {
    const answers = [];
    const expectedScores = 7;

    answers.length = TOTAL_ANSWERS_LENGTH - 1;
    answers.fill({type: `WRITE`, leftTime: 40});
    answers.push({type: `WRONG`, leftTime: 40});

    expect(getScores(answers)).to.equal(expectedScores);
  });

  it(`Should return 20 if all answers are fast`, () => {
    const answers = [];
    const expectedScores = 20;

    answers.length = TOTAL_ANSWERS_LENGTH;
    answers.fill({type: `FAST`, leftTime: 15});

    expect(getScores(answers)).to.equal(expectedScores);
  });
});
