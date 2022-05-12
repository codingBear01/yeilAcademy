import { front, back } from './arr.js';

const shuffle = (frontArr, backArr) => {
  const arr = [['1조: '], ['2조: '], ['3조: '], ['4조: ']];
  const shuffleF = [];
  const shuffleB = [];

  while (frontArr.length > 0) {
    const splicedFront = frontArr.splice(
      Math.floor(Math.random() * frontArr.length),
      1
    )[0];
    const splicedBack = backArr.splice(
      Math.floor(Math.random() * backArr.length),
      1
    )[0];

    shuffleF.push(splicedFront + '(프)');
    shuffleB.push(splicedBack + '(백)');
  }

  arr.forEach((v, i) => {
    const splicedShuffleFront = shuffleF.splice(0, 2);
    const splicedShuffleBack = shuffleB.splice(0, 2);
    v.push(splicedShuffleFront + ',');
    v.push(splicedShuffleBack);

    return setTimeout(() => console.log(v.join('')), (i + 1) * 1000);
  });
};

shuffle(front, back);
