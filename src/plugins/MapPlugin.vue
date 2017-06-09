<template>
  <div>
    <h1>My Custom Plugin</h1>
    <h6>{{text}}</h6>
    <button v-on:click="add">Add</button>
    <ul>
      <li v-for="t in txts">
        <input type="text" v-model:value="t.txt" v-bind:class="cClass" />
        <button v-on:click="remove" v-bind:data-id="t.id">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  props: {
    text: ''
  },
  methods: {
    add: function () {
      this.i++
      this.txts.push({id: this.i, txt: 'curVal' + this.i})
    },
    remove: function (event) {
      this.i--
      let idToRemove = $(event.target).attr('data-id')
      this.txts = this.txts.filter(function (obj) {
        return obj.id.toString() !== idToRemove
      })
    }
  },
  data () {
    return {
      i: 3,
      txts: [
        {id: 1, txt: 'curVal1'},
        {id: 2, txt: 'curVal2'},
        {id: 3, txt: 'curVal3'}
      ],
      txt: 'curVal2',
      cClass: 'valid',
      isActive: true
    }
  },
  watch: {
    txt: function (val) {
      console.log('watching')
      if (this.txt.length > 9) {
        this.cClass = 'invalid'
      } else {
        this.cClass = 'valid'
      }
    }
  }
}
</script>
<style scoped>
.valid {
  color: blue;
}

.invalid {
  color: red;
}
</style>
