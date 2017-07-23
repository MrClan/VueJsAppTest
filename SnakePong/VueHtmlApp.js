let EventBus = new Vue(); // a new separate Vue instance to be used as Global Event Bus

Vue.component('button-counter', {
  template: '<button v-on:click="increment">{{ counter }}</button>',
  data: function() {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function() {
      this.counter += 1
      this.$emit('increment')
    }
  },
})

// create a gamescreen component
Vue.component('gameComp', {
  template: `
  <div @click="$emit('kp')">
    <h1>Game Component {{yo}}</h1>
    <canvas></canvas>
  </div>
  `,
  data: function() {
    return {
      yo: 'child comp'
    };
  },
  methods: {
    handleKeyPress: function(e) {
      console.log('actual childComp', e);
    }
  },
  mounted: function() {
    EventBus.$on('userKeyPress', function(e) {
      console.log('global key press handler', e.KeyCode);
    });
  }
})

new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function() {
      this.total += 1
    },
    emitEvent: function() {
      this.$emit('kp');
    },
    logKeyChild: function(event) {
      this.$refs.game.handleKeyPress(event);
    }
  },
  mounted: function() {
    window.addEventListener("keyup", function(e) {
      // emit an event on the global event bus
      EventBus.$emit('userKeyPress', e);
    });
  }
});
