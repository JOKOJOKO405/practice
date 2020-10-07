'use strict';

{

  document.querySelector('button').addEventListener('click', function(){
    const li = document.createElement('li');
    const colors = document.querySelectorAll('input');
    let selected;

    colors.forEach((color) => {
      if(color.checked){
        selected = color.value;
      }
    });
    li.textContent = selected;

    document.querySelector('ul').appendChild(li);
  });
}