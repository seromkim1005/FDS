<template lang="pug">
  div.counter
    button.button.is-increase(@click="increaseCount" type="button") Count Up
    input.print-count(type="number" v-model.number="count")
    button.button.is-decrease(@click="decreaseCount" type="button")  Count Down
</template>

<script>
export default {
  data () {
    return { count: 0 }
  },
  // computed: {
  //   print_count(){ return 'Count Value is ' + this.count; }
  // },
  methods: {
    increaseCount(){ this.count++; },
    decreaseCount(){ this.count--; }
  }
}
</script>

<style lang="sass">
.counter
  padding-bottom: 20px
  border-bottom: 4px solid #ededed
  margin-bottom: 20px
  &:last-child
    padding-bottom: 0
    border-bottom: none
    margin-bottom: 0
  input
    margin:
      left: 10px
      right: 10px
    border: 4px solid #ededed
    padding: 0.5em
</style>


