// let app = new Vue({
//   el: '#app',
//   data: {
//     msg: 'yo'
//   }
// });

const store = new Vuex.Store({
  strict: true,
  state: {
    count: 1
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement: state => state.count--
  },
  getters: {
    multiplyByTwo: (state, getters) => state.count * 2,
    addArg: (state, getters) => (noToAdd) => state.count + noToAdd
  }
});

const Counter = {
  template: `<div @click='changeCount'>{{ count }}</div>`,
  // OPTION 1: TO ACCESS Vuex Store
  computed: {
    count() {
      // return this.$store.state.count;
      // return this.$store.getters.multiplyByTwo;
      return this.$store.getters.addArg(3);
    }
  },
  // OPTION 2: TO ACCESS Vuex Store
  // computed: Vuex.mapState(['count']),
  // OPTION 3: TO ACCESS Vuex Store
  // computed: Vuex.mapState({
  //   count: state => state.count
  // }),
  // OPTION 4: TO ACCESS Vuex Store ::: Using Object Spread Operator
  // computed: {
  //   count2() {
  //     return 1;
  //   },
  //   count() {
  //     return 2;
  //   },
  //   ...Vuex.mapState(['count']) // should work, but it shows syntax error: probably only works with module system setup [NOT SURE THOUGH]
  // },
  data() {
    return {
      flag: true
    }
  },
  methods: {
    changeCount: function() {
      if ((this.flag = !this.flag))
        this.$store.commit('increment');
      else
        this.$store.commit('decrement');
    }
  }
};

const app = new Vue({
  el: '#app',
  store,
  components: { Counter }
});
