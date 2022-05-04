const menu = document.querySelectorAll('.menu');
const text = document.querySelectorAll('.text');

menu.forEach((div, idx) => {
  div.addEventListener('mouseenter', () => {
    text[idx].classList.remove('inactive');
    text[idx].classList.add('active');
  });
});

menu.forEach((div, idx) => {
  div.addEventListener('mouseout', () => {
    text[idx].classList.remove('active');
    text[idx].classList.add('inactive');
  });
});

// menu.addEventListener('mouseenter', () => {
//   text.classList.remove('inactive');
//   text.classList.add('active');
// });

// menu.addEventListener('mouseout', () => {
//   text.classList.remove('active');
//   text.classList.add('inactive');
// });
