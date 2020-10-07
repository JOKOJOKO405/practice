new Vue({
  el: '#app',
  data: {
    text: 'Hello World',
  },
  methods: {
    revMsg: function (){
      this.text = this.text.split('').reverse().join('');
    }
  }
});