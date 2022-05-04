import { front, back } from './arr.js';

shuffle(front, back);

function shuffle(frontArr, backArr) {
  const arr = [[], [], [], []];
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

    shuffleF.push(splicedFront);
    shuffleB.push(splicedBack);
  }

  for (let i = 0; i < arr.length; i++) {
    const splicedShuffleFront = shuffleF.splice(0, 2);
    const splicedShuffleBack = shuffleB.splice(0, 2);
    arr[i].push(splicedShuffleFront);
    arr[i].push(splicedShuffleBack);
  }

  const result = [['1조: '], ['2조: '], ['3조: '], ['4조: ']];

  arr.forEach((v, i) => result[i].push(v.join(',')));

  console.log(result);
}
