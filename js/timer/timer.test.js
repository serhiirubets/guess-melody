import timer from './timer';
import {expect} from 'chai';

describe(`Timer`, () => {
  it(`Should return 0 if timer is finished`, () => {
    const timerInstance = timer(2);
    expect(timerInstance.tick()).to.equal(1);
    expect(timerInstance.tick()).to.equal(0);
    expect(timerInstance.tick()).to.equal(0);
    expect(timerInstance.tick()).to.equal(0);
  });

  it(`Should return 29 seconds`, () => {
    expect(timer(30).tick()).to.equal(29);
  });
});
