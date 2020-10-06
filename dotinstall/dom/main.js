'use strict';

{

  document.querySelector('button').addEventListener('click', function(){
    const item1 = document.querySelectorAll('li')[1];

    // item1.remove();
    document.querySelector('ul').removeChild(item1);
  });
}