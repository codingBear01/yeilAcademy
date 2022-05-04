const group = [['강지우'], ['박혜원'], ['조한률'], ['최낙원']];
const front = [
  '강명모',
  '김민관',
  '김재현',
  '박휘원',
  '신세림',
  '유승기',
  '최영수',
];
const full = ['남정수', '배혜진', '송민영', '임혜지', '정다빈'];

const arr = [];

for (let i = 0; i < group.length; i++) {
  const splicedFront = front.splice(
    Math.floor(Math.random() * front.length),
    1
  )[0];
  if (group[i].length < 4) group[i].push(splicedFront);
}
console.log(group);
