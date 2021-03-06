(function(){
  'use strict';

  var likeComponent = Vue.extend({
    props: {
      msg: {
        type: String,
        default: 'like',
      }
    },
    data: function(){
      return {
        count: 0,
      }
    },
    template: '<button @click="countUp">{{ msg }}{{ count }}</button>',
    methods: {
      countUp: function (){
        this.count++;
        this.$emit('increment');
      }
    },
  });

  var app = new Vue({
    el: '#app',
    components: {
      'like-component' : likeComponent,
    },
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function (){
        this.total++;
      }
    },
  });

})();

