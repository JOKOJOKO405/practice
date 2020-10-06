'use strict';

{
  // function update(){
  //   document.querySelector('h1').textContent = '変わった！';
  // }
  // setTimeout(update, 1000);

  document.querySelector('button').addEventListener('click', function(){
    // update();
    const targetNode = document.querySelector('h1');
    targetNode.textContent = '変わった！';
    targetNode.title = 'this is title';
    targetNode.style.backgroundColor = 'skyblue';
  });
}