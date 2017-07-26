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
    },
    index: {
      type: Number,
      default: 0
    }
  },
  watch: {
    count(new_value, old_value) {
      // console.log('new: %s, old: %s', new_value, old_value);
      // new_value > old_value ? '증가' : '감소'
      this.$emit('changeCount', this.index, new_value);
    }
  },
  methods: {
    increaseCount(n){
      this.count++;
      // 부모 컴포넌트에 이벤트를 방출
      this.$emit('changeCount', this.index, this.count);
    },
    decreaseCount(n){
      this.count--;
      this.$emit('changeCount', this.index, this.count);
    },
    resetCount(){ this.count = this.initValue; }
  }
}
</script>

<style lang="sass">
  .counter
    display: flex
    justify-content: center
    align-items: center
    min-width: 320px
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


