<template lang="pug">
  div.counter
    button.button.is-increase(@click="increaseCount" type="button") Count Up
    input.print-count(type="number" v-model.number="count")
    button.button.is-decrease(@click="decreaseCount" type="button")  Count Down
</template>

<script>
export default {
  data () {
    return { count: this.initValue }
  },
  props: {
    initValue: {
      type: Number,
      default: 0
    }
  },
  methods: {
    increaseCount(){
      this.count++;
      // 부모 컴포넌트에 이벤트를 방출
      this.$emit('increase');
    },
    decreaseCount(){
      this.count--;
      this.$emit('decrease');
    },
    resetCount(){ this.count = this.initValue; }
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


