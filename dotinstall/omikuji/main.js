'use strict';

{
  const btn = document.querySelector('#button');

  btn.addEventListener('click', () => {
    const result = ['大吉', '中吉', '凶', '大凶'];

    btn.textContent = result[Math.floor(Math.random() * result.length)];

    // switch (n) {
    //   case 0:
    //     btn.textContent = 'あたり';
    //     break;
    //   case 1:
    //     btn.textContent = '???';
    //     break;
    //   case 2:
    //     btn.textContent = 'はずれ';
    //     break;
    // }
  });
}