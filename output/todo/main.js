(function () {
  "use strict";

  const app = new Vue({
    el: "#app",
    data: {
      todos: [
        {
          task: "ゴミ捨て",
          date: '2020/10/09',
          done: false,
        },
        {
          task: "買い物",
          date: '2020/07/13',
          done: true,
        },
        {
          task: "勉強",
          date: '2020/10/13',
          done: false,
        },
      ],
    },
    methods: {
      // createDate: function(){
      //   let d = new Date();
      //   let date =  d.getFullYear() + "/" + d.getMonth()+ 1 + "/" + d.getDate();
      //   this.todos.date = date;
      // }
    },
  });
})();
