'use strict';

{
  // minからmaxまでの整数
  // Math.floor(Math.random()*(max + 1 - min)) + min
  // console.log(Math.floor(Math.random()*6) + 1);

  // let i = 0;
  // function showTime(){
  //   console.log(new Date());
  //   i++;
  //   if(i > 4){
  //     clearInterval(timerId);
  //   }
  // }
  // const timerId = setInterval(showTime, 1000);

  let i = 0;
  function timeOut(){
    console.log(new Date());
    const timeOutId = setTimeout(timeOut, 1000);
    i++;
    if(i > 6){
      clearTimeout(timeOutId);
    }
  }

  timeOut();

}