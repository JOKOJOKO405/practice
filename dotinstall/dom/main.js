'use strict';

{

  document.querySelector('button').addEventListener('click', function(){
    const li = document.createElement('li');
    const colors = document.querySelectorAll('input');
    const selected = [];

    colors.forEach(color => {
      if(color.checked){
        selected.push(color.value);
      }
    })

    li.textContent = selected.join(',');
    document.querySelector('ul').appendChild(li);
  });
}