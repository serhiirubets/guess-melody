import {TOTAL_ANSWERS_LENGTH, Answer, FAST_ANSWER_TIME} from '../constants';

export default (answers) => {
  if (answers.length < TOTAL_ANSWERS_LENGTH) {
    return -1;
  }

  return answers.reduce((result, {type, leftTime}) => {
    if (type === Answer.WRITE && leftTime < FAST_ANSWER_TIME) {
      return result + Answer.FAST;
    }

    return result + Answer[type];
  }, 0);
};
