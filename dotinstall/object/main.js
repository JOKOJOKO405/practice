'use strict';

{
  const otherPoint = {
    r: 4,
    color: 'red',
  };
  const point = {
    x: 120,
    y: 100,
    ...otherPoint,
  }; 

  console.log(point);

  // レスト構文
  const { x, r, ...others} = point;

  console.log(x);
  console.log(r);
  console.log(others);

  // オブジェクトを配列にする
  Object.keys(point).forEach(key => {
    console.log(`Keys: ${key} Value: ${point[key]}`);
  })


  let x = [1, 2];
  let y = [...x];
  x[0] = 5;
  console.log(x);
  console.log(y);

  const str = ['あいう', 'えおか', 'きくけ'];
  console.log(str.join(''));
  const t = '12/10/45';
  const [h, m, s] = t.split('/');
  console.log(h);
  console.log(m);
}