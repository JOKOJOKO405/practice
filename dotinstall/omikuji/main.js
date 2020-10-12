'use strict';

{
  const btn = document.querySelector('#button');

  btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 3);

    switch (n) {
      case 0:
        btn.textContent = 'あたり';
        break;
      case 1:
        btn.textContent = '???';
        break;
      case 2:
        btn.textContent = 'はずれ';
        break;
    }
  });
}