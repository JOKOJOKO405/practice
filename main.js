let target = document.querySelector('span');
let texts = target.textContent;

const txtArray = texts.split('');

console.log(txtArray);

const newTxt = txtArray.map((txt) => {
  return txt + '文字を足しました';
});

console.log(newTxt);

let search = txtArray.filter((text) => {
  return text === 'し';
});

console.log(search);